import nodemailer from "nodemailer";

import { normalizeContactValues, type ContactFormValues } from "@/lib/contact";

type ContactMailerConfig = {
  smtpHost: string;
  smtpPort: number;
  smtpUser: string;
  smtpPassword: string;
  receiverEmail: string;
  senderEmail: string;
};

type ContactEmailResult = {
  confirmationSent: boolean;
};

type SmtpEnvironmentStatus = {
  configured: boolean;
  message: string;
  missingVariables: string[];
};

const smtpEnvironmentStatus = detectSmtpEnvironment();

if (!smtpEnvironmentStatus.configured) {
  console.error(`[2DK IT] ${smtpEnvironmentStatus.message}`);
}

export function isContactMailerConfigured() {
  return smtpEnvironmentStatus.configured;
}

export function getContactMailerConfigurationMessage() {
  return smtpEnvironmentStatus.message;
}

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function detectSmtpEnvironment(): SmtpEnvironmentStatus {
  const requiredVariables = ["SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD", "CONTACT_SENDER_EMAIL"];
  const missingVariables = requiredVariables.filter((name) => !process.env[name]);

  if (missingVariables.length > 0) {
    return {
      configured: false,
      missingVariables,
      message:
        `Configuration email incomplète. Variables manquantes: ${missingVariables.join(", ")}. ` +
        "L'envoi des emails de contact est désactivé tant que cette configuration n'est pas complétée.",
    };
  }

  const smtpPortValue = process.env.SMTP_PORT;
  if (smtpPortValue && Number.isNaN(Number(smtpPortValue))) {
    return {
      configured: false,
      missingVariables: [],
      message:
        "Configuration email invalide. La variable SMTP_PORT doit contenir un nombre valide (par exemple 587 ou 465).",
    };
  }

  return {
    configured: true,
    missingVariables: [],
    message: "Configuration SMTP détectée.",
  };
}

function createConfig(): ContactMailerConfig {
  if (!smtpEnvironmentStatus.configured) {
    throw new Error(smtpEnvironmentStatus.message);
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL ?? "contact@2dk-it.fr";
  const senderEmail = process.env.CONTACT_SENDER_EMAIL;

  return {
    smtpHost: smtpHost ?? "",
    smtpPort,
    smtpUser: smtpUser ?? "",
    smtpPassword: smtpPassword ?? "",
    receiverEmail: cleanHeader(receiverEmail),
    senderEmail: cleanHeader(senderEmail ?? ""),
  };
}

function createTransporter(config: ContactMailerConfig) {
  return nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpPort === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });
}

function buildInquiryText(values: ContactFormValues) {
  const normalized = normalizeContactValues(values);

  return [
    `Nom: ${normalized.name}`,
    `Entreprise: ${normalized.company}`,
    `Email: ${normalized.email}`,
    `Téléphone: ${normalized.phone || "Non renseigné"}`,
    `Besoin: ${normalized.need}`,
    "",
    normalized.message,
  ].join("\n");
}

function buildConfirmationText(values: ContactFormValues) {
  const normalized = normalizeContactValues(values);

  return [
    `Bonjour ${normalized.name},`,
    "",
    "Nous avons bien reçu votre demande. Nous revenons vers vous rapidement.",
    "",
    "Récapitulatif:",
    `Entreprise: ${normalized.company}`,
    `Besoin: ${normalized.need}`,
    "",
    "2DK IT",
  ].join("\n");
}

export async function sendContactEmails(values: ContactFormValues): Promise<ContactEmailResult> {
  const config = createConfig();
  const transporter = createTransporter(config);
  const normalized = normalizeContactValues(values);

  const [inquiryResult, confirmationResult] = await Promise.allSettled([
    transporter.sendMail({
      from: `2DK IT <${config.senderEmail}>`,
      to: config.receiverEmail,
      replyTo: normalized.email,
      subject: `Nouvelle demande de contact - ${normalized.company}`,
      text: buildInquiryText(normalized),
    }),
    transporter.sendMail({
      from: `2DK IT <${config.senderEmail}>`,
      to: normalized.email,
      subject: "Nous avons bien reçu votre demande - 2DK IT",
      text: buildConfirmationText(normalized),
    }),
  ]);

  if (inquiryResult.status === "rejected") {
    throw inquiryResult.reason;
  }

  return {
    confirmationSent: confirmationResult.status === "fulfilled",
  };
}
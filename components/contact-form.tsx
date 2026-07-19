"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { FieldShell, Input, Textarea } from "@/components/ui/form";
import {
  createEmptyContactValues,
  hasContactErrors,
  validateContactForm,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/contact";

type SubmissionState =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const initialValues = createEmptyContactValues();

function getValueTarget(value: string) {
  return value;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [state, setState] = useState<SubmissionState>({ kind: "idle" });

  const hasErrors = useMemo(() => hasContactErrors(errors), [errors]);

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextValues = {
      ...values,
      startedAt: values.startedAt || String(Date.now()),
    };
    const nextErrors = validateContactForm(nextValues);
    setErrors(nextErrors);

    if (hasContactErrors(nextErrors)) {
      setState({ kind: "error", message: nextErrors.form ?? "Merci de corriger les champs indiqués." });
      return;
    }

    setState({ kind: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextValues),
      });

      const payload = (await response.json()) as {
        ok: boolean;
        message?: string;
        errors?: ContactFieldErrors;
        confirmationSent?: boolean;
      };

      if (!response.ok || !payload.ok) {
        const nextPayloadErrors = payload.errors ?? {};
        setErrors(nextPayloadErrors);
        setState({
          kind: "error",
          message: payload.message ?? "Une erreur est survenue pendant l'envoi.",
        });
        return;
      }

      setValues(createEmptyContactValues());
      setErrors({});
      setState({
        kind: "success",
        message: payload.message ?? "Votre demande a bien été envoyée.",
      });
    } catch {
      setState({
        kind: "error",
        message: "Impossible d'envoyer votre demande pour le moment.",
      });
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {state.kind === "success" ? (
        <Callout tone="accent">
          <p className="text-sm leading-6 text-slate-100">{state.message}</p>
        </Callout>
      ) : state.kind === "error" ? (
        <Callout tone="neutral">
          <p className="text-sm leading-6 text-slate-100">{state.message}</p>
        </Callout>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldShell label="Nom" fieldId="contact-name" errorText={errors.name}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            placeholder="Votre nom"
            value={getValueTarget(values.name)}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : "contact-name-help"}
            maxLength={120}
          />
        </FieldShell>

        <FieldShell label="Entreprise" fieldId="contact-company" errorText={errors.company}>
          <Input
            id="contact-company"
            name="company"
            autoComplete="organization"
            required
            placeholder="Votre entreprise"
            value={getValueTarget(values.company)}
            onChange={(event) => updateField("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : "contact-company-help"}
            maxLength={160}
          />
        </FieldShell>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FieldShell label="Email" fieldId="contact-email" errorText={errors.email}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="contact@entreprise.com"
            value={getValueTarget(values.email)}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : "contact-email-help"}
            maxLength={254}
          />
        </FieldShell>

        <FieldShell
          label="Téléphone"
          fieldId="contact-phone"
          helperText="Optionnel. Nous l'utiliserons uniquement si nécessaire."
          errorText={errors.phone}
        >
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 00 00 00 00"
            value={getValueTarget(values.phone)}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : "contact-phone-help"}
            maxLength={32}
          />
        </FieldShell>
      </div>

      <FieldShell label="Besoin" fieldId="contact-need" errorText={errors.need}>
        <Input
          id="contact-need"
          name="need"
          required
          placeholder="Refonte, création, support, évolution..."
          value={getValueTarget(values.need)}
          onChange={(event) => updateField("need", event.target.value)}
          aria-invalid={Boolean(errors.need)}
          aria-describedby={errors.need ? "contact-need-error" : "contact-need-help"}
          maxLength={120}
        />
      </FieldShell>

      <FieldShell
        label="Message"
        fieldId="contact-message"
        helperText="Décrivez brièvement le contexte, l'objectif et l'échéance souhaitée."
        errorText={errors.message}
      >
        <Textarea
          id="contact-message"
          name="message"
          required
          placeholder="Décrivez votre besoin"
          value={getValueTarget(values.message)}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
          maxLength={4000}
        />
      </FieldShell>

      <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface-strong/40 p-4">
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          required
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "contact-consent-error" : undefined}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900 text-primary focus:ring-primary/20"
        />
        <label htmlFor="contact-consent" className="text-sm leading-6 text-slate-300">
          J&apos;accepte que mes informations soient utilisées pour traiter ma demande, conformément à la{" "}
          <a
            href="/politique-de-confidentialite"
            className="text-primary underline decoration-primary/25 underline-offset-4"
          >
            politique de confidentialité
          </a>
          .
        </label>
      </div>
      {errors.consent ? (
        <p id="contact-consent-error" className="text-sm text-red-300">
          {errors.consent}
        </p>
      ) : null}

      <div className="sr-only">
        <label htmlFor="companyWebsite">Site web de l'entreprise</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={values.honeypot}
          onChange={(event) => updateField("honeypot", event.target.value)}
        />
      </div>

      <input type="hidden" name="startedAt" value={values.startedAt} readOnly />

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="primary" disabled={state.kind === "submitting"}>
          {state.kind === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setValues(createEmptyContactValues());
            setErrors({});
            setState({ kind: "idle" });
          }}
        >
          Réinitialiser
        </Button>
      </div>

      {hasErrors ? (
        <p className="text-sm text-red-300">Merci de vérifier les champs signalés.</p>
      ) : null}
    </form>
  );
}
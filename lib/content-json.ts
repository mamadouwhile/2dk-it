export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseTypedJson<T>(
  value: unknown,
  isValid: (candidate: unknown) => candidate is T,
  label: string,
): T {
  if (!isValid(value)) {
    throw new Error(`Le contenu JSON "${label}" est invalide ou ne respecte pas le schéma attendu.`);
  }

  return value;
}

export const contentJson = {
  isRecord,
  parseTypedJson,
};



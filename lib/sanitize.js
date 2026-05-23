export function sanitizeInput(text) {
  if (!text) return "";

  const injectionPatterns = [
    /ignore\s+previous\s+instructions?/gi,
    /ignore\s+all\s+previous\s+instructions?/gi,
    /system\s+override/gi,
    /prompt\s+injection/gi,
    /forget\s+previous\s+instructions?/gi,
    /disregard\s+(all\s+)?previous\s+instructions?/gi,
    /reveal\s+(the\s+)?system\s+prompt/gi,
    /show\s+me\s+(the\s+)?hidden\s+prompt/gi,
    /developer\s+mode/gi,
    /jailbreak/gi,
  ];

  let sanitized = text;

  for (const pattern of injectionPatterns) {
    sanitized = sanitized.replace(pattern, "[REDACTED_SYSTEM_OVERRIDE_ATTEMPT]");
  }

  return sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // Neutralize dangerous HTML tags
    .trim();
}

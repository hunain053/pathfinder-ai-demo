import assert from "node:assert/strict";
import test from "node:test";

import { normalizeAtsSuggestion, normalizeAtsSuggestions } from "../lib/ats.js";

test("normalizeAtsSuggestion preserves structured suggestion objects", () => {
  const result = normalizeAtsSuggestion({ category: "Keywords", tip: "Add missing terms" });

  assert.deepEqual(result, { category: "Keywords", tip: "Add missing terms" });
});

test("normalizeAtsSuggestion converts legacy strings into displayable suggestions", () => {
  const result = normalizeAtsSuggestion("Use more action verbs");

  assert.deepEqual(result, { category: "Suggestion", tip: "Use more action verbs" });
});

test("normalizeAtsSuggestions filters empty entries and normalizes mixed input", () => {
  const result = normalizeAtsSuggestions([
    { category: "Formatting", tip: "Tighten layout" },
    "Add measurable outcomes",
    null,
    { tip: "" },
  ]);

  assert.deepEqual(result, [
    { category: "Formatting", tip: "Tighten layout" },
    { category: "Suggestion", tip: "Add measurable outcomes" },
  ]);
});
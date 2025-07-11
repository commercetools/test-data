---
'@commercetools/composable-commerce-test-data': minor
---

Migrated the `Location` test-data model (under `zone`) to the **v2 builder pattern**.

Highlights:
• Introduced separate REST (`LocationRest`) and GraphQL (`LocationGraphql`) builders plus a compatibility builder (`Location`) for full backwards-compatibility.
• Added representation-specific field configs; required `country` now always generated, optional `state` defaults to `null`.
• Converted presets and tests to `restPreset`, `graphqlPreset`, and `compatPreset` structure.

This is a backward-compatible change; existing `Location.random()` usages keep working, but consumers are encouraged to adopt the new explicit builders.

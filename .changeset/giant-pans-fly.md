---
'@commercetools-test-data/channel': patch
---

Fixes the exported presets for the compatibility test data model.
We were exporting the GraphQL ones so it was not possible to generate REST data models out of them.

---
'@commercetools-test-data/core': patch
---

Fix transformer types. Now the `replaceFields` option takes precedence as the return value can be of any type.
If the `addFields` and `removeFields` options are also provided together with the `replaceFields` option, a warning will be logged.

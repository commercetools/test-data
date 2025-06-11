---
'@commercetools/composable-commerce-test-data': minor
---

We've updated several models related to Custom Applications:

- `CustomApplicationInstallation`: It now exports a `constants` property including values for different oAuth scopes.
- `CustomApplicationInstallationPermissions`: It now exports a `constants` property including values for different oAuth scopes.
- `CustomApplication`: The `constants` property was exporting the wrong values. We also change the default model to populate the minimal fields and include a new preset (`withAllFields`) which can be used for use cases when a fully populated object is needed.

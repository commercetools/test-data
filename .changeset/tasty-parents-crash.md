---
'@commercetools/composable-commerce-test-data': minor
---

Migrated test-data models related to Organization extensions to the new implementation patterns.
Included models:

- `ContactInformation`
- `OidcSsoConfig`
- `OrganizationExtension`

The main change is that the default `OrganizationExtension` model was populating all its fields and that's not what consumers were expecting so we changed it to populate only the required ones.
On top of that, there's a new preset available (`OrganizationExtension.presets.withAllFields`) that can be use to generate a fully populated model object.

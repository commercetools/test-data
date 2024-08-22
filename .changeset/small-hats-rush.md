---
'@commercetools-test-data/standalone-price': patch
---

Fix for the GraphQL build of the StandalonePrice model

- Modified the GraphQL transformer to ensure that CustomerGroupRef and ChannelRef return IDs instead of keys
- Added a null custom property to the StandalonePrice model generator to align with schema requirements.

---
'@commercetools-test-data/channel': patch
---

There was an error with the legacy `ChannelDraft` model presets as it was always using the `GraphQL` ones instead of relying on the `build` method used (`buildRest` or `buildGraphql`).

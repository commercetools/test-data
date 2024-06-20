---
'@commercetools-test-data/inventory-entry': major
'@commercetools-test-data/business-unit': major
'@commercetools-test-data/quote-request': major
'@commercetools-test-data/staged-quote': major
'@commercetools-test-data/commons': major
'@commercetools-test-data/payment': major
'@commercetools-test-data/quote': major
---

This breaking change updates the export method for Reference and ReferenceDraft presets to simplify the call syntax. Models that use these presets in their generators or transformers are also updated.

Updating this package will require changes in your codebase. To migrate:

- Replace any instance of `Reference.presets.<preset-name>.<preset-name>()` with `Reference.presets.<preset-name>()`
- Replace any instance of `ReferenceDraft.presets.<preset-name>.<preset-name>()` with `ReferenceDraft.presets.<preset-name>()`

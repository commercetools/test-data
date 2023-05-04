# @commercetools-test-data/attribute-definition

This package provides the data model for the commercetools platform `AttributeDefinition` type

https://docs.commercetools.com/api/projects/productTypes#attributedefinition

# Install

```bash
$ pnpm add -D @commercetools-test-data/attribute-definition
```

# Usage

```ts
import type { TAttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import * as AttributeDefinitionDraft from '@commercetools-test-data/attribute-definition';

const attributeDefinition =
  AttributeDefinition.random().build<TAttributeDefinition>();
const attributeDefinitionDraft =
  AttributeDefinitionDraft.random().build<TAttributeDefinitionDraft>();
```

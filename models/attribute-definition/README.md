# @commercetools-test-data/attribute-definition

This package provides the data model for the commercetools platform `AttributeDefinition` type

https://docs.commercetools.com/api/projects/productTypes#attributedefinition

# Install

```bash
$ pnpm add -D @commercetools-test-data/attribute-definition
```

# Usage

```ts
import type {
  TAttributeDefinition,
  TAttributeDefinitionDraft,
} from '@commercetools-test-data/attribute-definition';
import * as AttributeDefinition from '@commercetools-test-data/attribute-definition';

const attributeDefinition =
  AttributeDefinition.random().build<TAttributeDefinition>();
const attributeDefinitionDraft =
  AttributeDefinition.AttributeDefinitionDraft.random().build<TAttributeDefinitionDraft>();
```

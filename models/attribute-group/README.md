# @commercetools-test-data/attribute-group

This package provides the data model for the commercetools platform `attributeGroup` representations

https://docs.commercetools.com/api/projects/attribute-groups#attributegroup

# Install

```bash
$ pnpm add -D @commercetools-test-data/attribute-group
```

# Usage

```ts
import {
  AttributeGroup,
  type TAttributeGroup,
  type TAttributeGroupGraphql,
} from '@commercetools-test-data/attribute-group';

const attributeGroup = AttributeGroup.random().build<TAttributeGroup>();
// For REST entities
const attributeGroupRest = AttributeGroup.random().buildRest<TAttributeGroup>();
// For Graphql entities
const attributeGroupGraphql =
  AttributeGroup.random().buildGraphql<TAttributeGroupGraphql>();
```

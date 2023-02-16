import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductTypeDraftDefault } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#producttypedraft

const generator = Generator<TProductTypeDraftDefault>({
  fields: {
    name: fake((f) => f.random.words(2)),
    key: fake((f) => f.lorem.slug()),
    description: fake((f) => f.random.words()),
    attributes: fake(() => [AttributeDefinitionDraft.random()]),
    attributeDefinitions: fake(() => [AttributeDefinitionDraft.random()]),
  },
});

export default generator;

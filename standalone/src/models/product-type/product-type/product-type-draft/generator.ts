import { fake, Generator } from '@/core';
import { AttributeDefinitionDraft } from '@/models/product-type';
import type { TProductTypeDraft } from '../types';

// https://docs.commercetools.com/api/projects/productTypes#producttypedraft

const generator = Generator<TProductTypeDraft>({
  fields: {
    name: fake((f) => f.lorem.words(2)),
    key: fake((f) => f.lorem.slug()),
    description: fake((f) => f.lorem.words()),
    attributes: fake(() => [AttributeDefinitionDraft.random()]),
  },
});

export default generator;

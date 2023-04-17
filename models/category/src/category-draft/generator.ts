import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { Generator, fake } from '@commercetools-test-data/core';
import type { TCategoryDraft } from '../types';

// https://docs.commercetools.com/api/projects/categories#categorydraft

const generator = Generator<TCategoryDraft>({
  fields: {
    key: fake((f) => f.lorem.slug(2)),
    externalId: fake((f) => f.datatype.uuid()),
    name: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    description: null,
    parent: fake(() => Reference.random()),
    orderHint: fake((f) =>
      f.datatype.float({ min: 0.01, max: 0.99 }).toString()
    ),
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    assets: null,
    custom: null,
  },
});

export default generator;

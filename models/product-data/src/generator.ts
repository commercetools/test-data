import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductData } from './types';

// https://docs.commercetools.com/api/projects/products#productdata

const generator = Generator<TProductData>({
  fields: {
    name: fake(() => LocalizedString.random()),
    categories: fake(() => [Reference.presets.category()]),
    categoryOrderHints: fake((f) => ({
      [f.datatype.uuid()]: String(Math.random()),
    })),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    metaTitle: fake(() => LocalizedString.random()),
    metaDescription: fake(() => LocalizedString.random()),
    metaKeywords: fake(() => LocalizedString.random()),
    // TODO: Include random ProductVariant when available
    masterVariant: null,
    variants: [],
    // TODO: Include random SearchKeywords when available
    searchKeywords: null,
  },
});

export default generator;

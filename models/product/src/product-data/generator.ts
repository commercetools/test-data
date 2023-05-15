import * as Category from '@commercetools-test-data/category';
import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { TProductData } from './types';

// https://docs.commercetools.com/api/projects/products#productdata

const generator = Generator<TProductData>({
  fields: {
    name: fake(() => LocalizedString.random()),
    categories: fake(() => [Category.random()]),
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
    // TODO: Include random ProductVariant when available
    variant: null,
    // TODO: Include random ProductVariant[] when available
    variants: [],
    // TODO: Include random ProductVariant[] when available
    allVariants: [],
    // TODO: Include random SearchKeywords when available
    searchKeywords: null,
    // TODO: Include random SearchKeywords[] when available
    searchKeyword: [],
    skus: fake((f) => [`${f.random.word()}-${f.random.alphaNumeric(3)}`]),
  },
});

export default generator;

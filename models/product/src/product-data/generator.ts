import * as Category from '@commercetools-test-data/category';
import { LocalizedString } from '@commercetools-test-data/commons';
import { fake, Generator } from '@commercetools-test-data/core';
import { ProductVariant } from '../';
import { TProductData } from './types';

// https://docs.commercetools.com/api/projects/products#productdata

const generator = Generator<TProductData>({
  fields: {
    name: fake(() => LocalizedString.random()),
    categories: fake(() => [Category.random()]),
    categoryOrderHints: fake((f) => ({
      [f.string.uuid()]: String(Math.random()),
    })),
    description: fake(() => LocalizedString.random()),
    slug: fake(() => LocalizedString.presets.ofSlugs()),
    metaTitle: fake(() => LocalizedString.random()),
    metaDescription: fake(() => LocalizedString.random()),
    metaKeywords: fake(() => LocalizedString.random()),
    masterVariant: fake(() => ProductVariant.random()),
    variant: fake(() => ProductVariant.random()),
    variants: fake(() => [ProductVariant.random()]),
    allVariants: fake(() => [ProductVariant.random()]),
    // TODO: Include random SearchKeywords when available
    searchKeywords: [],
    // TODO: Include random SearchKeywords[] when available
    searchKeyword: [],
    skus: fake((f) => [`${f.lorem.word()}-${f.string.alphanumeric(3)}`]),
  },
});

export default generator;

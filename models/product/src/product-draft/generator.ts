import { LocalizedString, Reference } from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import { productPriceMode } from '../constants';
import { TProductDraft } from '../types';

// https://docs.commercetools.com/api/projects/products#productdraft

const generator = Generator<TProductDraft>({
  fields: {
    name: fake(() => LocalizedString.random()),
    productType: fake(() => Reference.random().typeId('product-type')),
    slug: fake(() => LocalizedString.random()),
    key: fake((f) => f.lorem.slug()),
    description: fake(() => LocalizedString.random()),
    categories: fake(() => [Reference.random().typeId('category')]),
    categoryOrderHints: null,
    metaTitle: null,
    metaDescription: null,
    metaKeywords: null,
    masterVariant: fake(() => ProductVariantDraft.random()),
    variants: fake(() => [ProductVariantDraft.random()]),
    taxCategory: fake(() => Reference.random().typeId('tax-category')),
    state: fake(() => Reference.random().typeId('state')),
    priceMode: oneOf(...Object.values(productPriceMode)),
    searchKeywords: null,
    publish: fake((f) => f.datatype.boolean()),
  },
});

export default generator;

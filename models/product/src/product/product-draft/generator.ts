import {
  LocalizedStringDraft,
  Reference,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import { fake, Generator, oneOf } from '@commercetools-test-data/core';
import { ProductVariantDraft } from '../../index';
import { productPriceMode } from '../constants';
import type { TProductDraft } from '../types';

// https://docs.commercetools.com/api/projects/products#productdraft

const generator = Generator<TProductDraft>({
  fields: {
    name: fake(() => LocalizedStringDraft.random()),
    productType: fake(() => Reference.random().typeId('product-type')),
    slug: fake(() => LocalizedStringDraft.presets.ofSlugs()),
    key: fake((f) => f.lorem.slug()),
    description: fake(() => LocalizedStringDraft.random()),
    categories: fake(() => [KeyReferenceDraft.presets.category()]),
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

import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
  ReferenceGraphql,
  ReferenceRest,
} from '@/models/commons';
import {
  ProductVariantDraftGraphql,
  ProductVariantDraftRest,
} from '../../product-variant/product-variant-draft';
import { productPriceMode } from '../constants';
import type { TProductDraftGraphql, TProductDraftRest } from '../types';

const commonFieldsConfig = {
  name: fake(() => LocalizedStringDraft.random()),
  slug: fake(() => LocalizedStringDraft.presets.ofSlugs()),
  key: fake((f) => f.lorem.slug()),
  description: fake(() => LocalizedStringDraft.random()),
  categories: null,
  categoryOrderHints: null,
  metaTitle: null,
  metaDescription: null,
  metaKeywords: null,
  priceMode: oneOf(...Object.values(productPriceMode)),
  searchKeywords: null,
  publish: fake((f) => f.datatype.boolean()),
};

export const restFieldsConfig: TModelFieldsConfig<TProductDraftRest> = {
  fields: {
    ...commonFieldsConfig,
    masterVariant: fake(() => ProductVariantDraftRest.random()),
    productType: fake(() => ReferenceRest.presets.productTypeReference()),
    state: fake(() => ReferenceRest.presets.stateReference()),
    taxCategory: fake(() => ReferenceRest.presets.taxCategoryReference()),
    variants: fake(() => [ProductVariantDraftRest.random()]),
    attributes: [],
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TProductDraftGraphql> = {
  fields: {
    ...commonFieldsConfig,
    masterVariant: fake(() => ProductVariantDraftGraphql.random()),
    productType: fake(() => ReferenceGraphql.presets.productTypeReference()),
    state: fake(() => ReferenceGraphql.presets.stateReference()),
    taxCategory: fake(() => ReferenceGraphql.presets.taxCategoryReference()),
    variants: fake(() => [ProductVariantDraftGraphql.random()]),
    attributes: null,
  },
};

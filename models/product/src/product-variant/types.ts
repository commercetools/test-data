import {
  ProductVariant,
  ProductVariantDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import type { TAttributeDraftGraphql, TAttributeGraphql } from '../attribute';

export type TProductVariant = ProductVariant;
export type TProductVariantDraft = ProductVariantDraft;

export type TProductVariantGraphql = Omit<
  TProductVariant,
  'attributes' | 'isMatchingVariant' | 'scopedPrice' | 'scopedPriceDiscounted'
> & {
  attributesRaw: Array<TAttributeGraphql>;
  __typename: 'ProductVariant';
};
export type TProductVariantDraftGraphql = Omit<
  TProductVariantDraft,
  'attributes'
> & {
  attributes: Array<TAttributeDraftGraphql>;
};

export type TProductVariantBuilder = TBuilder<TProductVariant>;
export type TProductVariantDraftBuilder = TBuilder<TProductVariantDraft>;
export type TCreateProductVariantBuilder = () => TProductVariantBuilder;
export type TCreateProductVariantDraftBuilder =
  () => TProductVariantDraftBuilder;

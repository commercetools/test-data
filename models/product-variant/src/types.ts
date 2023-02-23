import {
  ProductVariant,
  ProductVariantDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TProductVariant = ProductVariant;
export type TProductVariantDraft = ProductVariantDraft;

export type TProductVariantGraphql = Omit<
  TProductVariant,
  'attributes' | 'isMatchingVariant' | 'scopedPrice' | 'scopedPriceDiscounted'
> & {
  // TODO: require in the Graphql type from the Attributes package after rebasing
  attributesRaw: unknown;
  __typename: 'ProductVariant';
};
export type TProductVariantDraftGraphql = TProductVariantDraft & {
  __typename: 'ProductVariantInput';
};

export type TProductVariantBuilder = TBuilder<TProductVariant>;
export type TProductVariantDraftBuilder = TBuilder<TProductVariantDraft>;
export type TCreateProductVariantBuilder = () => TProductVariantBuilder;
export type TCreateProductVariantDraftBuilder =
  () => TProductVariantDraftBuilder;

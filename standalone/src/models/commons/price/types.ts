import type {
  IReference,
  IResourceIdentifier,
  Price,
  PriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpProductPrice, TCtpProductPriceDataInput } from '@/graphql-types';

// @TODO: Temporary type adjustments in this file are documented here:
// https://next-docs-subscriptions-docs.commercetools.vercel.app/api/types#ctp:api:type:Price
//https://next-docs-subscriptions-docs.commercetools.vercel.app/api/types#ctp:api:type:PriceDraft
// These should be removed once the official SDK provides support for recurrencePolicy.

export type TPrice = Price & {
  recurrencePolicy?: IReference;
};
export type TPriceDraft = PriceDraft & {
  recurrencePolicy?: IResourceIdentifier;
};

export type TPriceGraphql = TCtpProductPrice;
export type TPriceDraftGraphql = TCtpProductPriceDataInput;

export type TPriceBuilder = TBuilder<TPrice>;
export type TPriceDraftBuilder = TBuilder<TPriceDraft>;

export type TCreatePriceBuilder = () => TPriceBuilder;
export type TCreatePriceDraftBuilder = () => TPriceDraftBuilder;

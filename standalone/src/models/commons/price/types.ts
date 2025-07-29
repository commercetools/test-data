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

/**
 * @deprecated Use `TPriceRest` or `TPriceGraphql` instead.
 */
export type TPrice = Price & {
  recurrencePolicy?: IReference;
};

/**
 * @deprecated Use `TPriceDraftRest` or `TPriceDraftGraphql` instead.
 */
export type TPriceDraft = PriceDraft & {
  recurrencePolicy?: IResourceIdentifier;
};

export type TPriceRest = TPrice;
export type TPriceDraftRest = TPriceDraft;

export type TPriceGraphql = TCtpProductPrice;
export type TPriceDraftGraphql = TCtpProductPriceDataInput;

export type TCreatePriceBuilder<
  TPriceModel extends
    | TPrice
    | TPriceDraft
    | TPriceRest
    | TPriceGraphql
    | TPriceDraftRest
    | TPriceDraftGraphql,
> = () => TBuilder<TPriceModel>;

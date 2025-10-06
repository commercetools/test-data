import type {
  ShippingRate,
  ShippingRateDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type { TCtpShippingRate, TCtpShippingRateDraft } from '@/graphql-types';

/**
 * @deprecated use 'TShippingRateRest' or 'TShippingRateGraphql' instead
 */
export type TShippingRate = ShippingRate;
export type TShippingRateRest = ShippingRate;
export type TShippingRateGraphql = TCtpShippingRate;

/**
 * @deprecated use 'TShippingRateDraftRest' or 'TShippingRateDraftGraphql' instead
 */
export type TShippingRateDraft = ShippingRateDraft;
export type TShippingRateDraftRest = ShippingRateDraft;
export type TShippingRateDraftGraphql = TCtpShippingRateDraft;

export type TCreateShippingRateBuilder<
  TShippingRateModel extends
    | TShippingRateRest
    | TShippingRateGraphql
    | TShippingRateDraftRest
    | TShippingRateDraftGraphql,
> = () => TBuilder<TShippingRateModel>;

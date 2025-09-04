import { ShippingRateDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingRateDraft } from '@/graphql-types';

export type TShippingRateDraftRest = ShippingRateDraft;
export type TShippingRateDraftGraphql = TCtpShippingRateDraft;

export type TShippingRateDraftBuilder<
  TModel extends TShippingRateDraftRest | TShippingRateDraftGraphql,
> = () => TBuilder<TModel>;

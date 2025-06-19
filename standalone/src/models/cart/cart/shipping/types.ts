import { Shipping, ShippingDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShipping, TCtpShippingDraft } from '@/graphql-types';

export type TShippingRest = Shipping;
export type TShippingDraftRest = ShippingDraft;

export type TShippingGraphql = TCtpShipping;
export type TShippingDraftGraphql = TCtpShippingDraft;

export type TCreateShippingBuilder<
  TModel extends
    | TShippingRest
    | TShippingGraphql
    | TShippingDraftRest
    | TShippingDraftGraphql,
> = () => TBuilder<TModel>;

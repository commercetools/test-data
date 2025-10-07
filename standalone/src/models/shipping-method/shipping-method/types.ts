import type {
  ShippingMethod,
  ShippingMethodDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import type {
  TCtpShippingMethod,
  TCtpShippingMethodDraft,
} from '@/graphql-types';

/**
 * @deprecated use `TShippingMethodRest` or `TShippingMethodGraphql` instead
 */
export type TShippingMethod = ShippingMethod;
export type TShippingMethodRest = ShippingMethod;
export type TShippingMethodGraphql = TCtpShippingMethod;

/**
 * @deprecated use `TShippingMethodDraftRest` or `TShippingMethodDraftGraphql` instead
 */
export type TShippingMethodDraft = ShippingMethodDraft;
export type TShippingMethodDraftRest = ShippingMethodDraft;
export type TShippingMethodDraftGraphql = TCtpShippingMethodDraft;

export type TCreateShippingMethodBuilder<
  TShippingMethodModel extends
    | TShippingMethodRest
    | TShippingMethodGraphql
    | TShippingMethodDraftRest
    | TShippingMethodDraftGraphql,
> = () => TBuilder<TShippingMethodModel>;

import type {
  ShippingMethod,
  ShippingMethodDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingMethod, TCtpShippingMethodDraft } from '@/graphql-types';

/**
 * @deprecated use `TShippingMethodRest` or `TShippingMethodGraphql` instead
 */
export type TShippingMethod = ShippingMethod;

/**
 * @deprecated use `TShippingMethodDraftRest` or `TShippingMethodDraftGraphql` instead
 */
export type TShippingMethodDraft = ShippingMethodDraft;

// REST types
export type TShippingMethodRest = ShippingMethod;
export type TShippingMethodDraftRest = ShippingMethodDraft;

// GraphQL types
export type TShippingMethodGraphql = TCtpShippingMethod;
export type TShippingMethodDraftGraphql = TCtpShippingMethodDraft;

export type TCreateShippingMethodBuilder<
  TShippingMethodModel extends
    | TShippingMethodRest
    | TShippingMethodGraphql
    | TShippingMethodDraftRest
    | TShippingMethodDraftGraphql,
> = () => TBuilder<TShippingMethodModel>;

import type { ShippingMethodDraft } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpShippingMethodDraft } from '@/graphql-types';

/**
 * @deprecated use `TShippingMethodDraftRest` or `TShippingMethodDraftGraphql` instead
 */
export type TShippingMethodDraft = ShippingMethodDraft;

export type TShippingMethodDraftRest = ShippingMethodDraft;
export type TShippingMethodDraftGraphql = TCtpShippingMethodDraft;

export type TCreateShippingMethodDraftBuilder<
  TShippingMethodDraftModel extends
    | TShippingMethodDraftRest
    | TShippingMethodDraftGraphql,
> = () => TBuilder<TShippingMethodDraftModel>;

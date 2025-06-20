import {
  ItemShippingDetails,
  ItemShippingDetailsDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpItemShippingDetails,
  TCtpItemShippingDetailsDraft,
} from '@/graphql-types';

export type TItemShippingDetailsRest = ItemShippingDetails;
export type TItemShippingDetailsDraftRest = ItemShippingDetailsDraft;

export type TItemShippingDetailsGraphql = TCtpItemShippingDetails;
export type TItemShippingDetailsDraftGraphql = TCtpItemShippingDetailsDraft;

export type TCreateItemShippingDetailsBuilder<
  TModel extends
    | TItemShippingDetailsRest
    | TItemShippingDetailsGraphql
    | TItemShippingDetailsDraftRest
    | TItemShippingDetailsDraftGraphql,
> = () => TBuilder<TModel>;

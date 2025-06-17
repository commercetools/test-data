import { ItemShippingTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpItemShippingTarget } from '@/graphql-types';

export type TItemShippingTargetRest = ItemShippingTarget;

export type TItemShippingTargetGraphql = TCtpItemShippingTarget;

export type TCreateItemShippingTargetBuilder<
  TModel extends TItemShippingTargetRest | TItemShippingTargetGraphql,
> = () => TBuilder<TModel>;

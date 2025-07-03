import { ItemState } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpItemState } from '@/graphql-types';

export type TItemStateRest = ItemState;
export type TItemStateGraphql = TCtpItemState;

export type TCreateItemStateBuilder<
  TModel extends TItemStateRest | TItemStateGraphql,
> = () => TBuilder<TModel>;

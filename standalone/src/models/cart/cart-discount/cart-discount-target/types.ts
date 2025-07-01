import { CartDiscountTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpCartDiscountTarget } from '@/graphql-types';

export type TCartDiscountTargetRest = CartDiscountTarget;
export type TCartDiscountTargetGraphql = TCtpCartDiscountTarget & {
  predicate?: string | null;
  __typename: string;
};

export type TCreateCartDiscountTargetBuilder<
  TModel extends TCartDiscountTargetRest | TCartDiscountTargetGraphql,
> = () => TBuilder<TModel>;

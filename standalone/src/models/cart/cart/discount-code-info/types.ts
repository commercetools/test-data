import { DiscountCodeInfo } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDiscountCodeInfo } from '@/graphql-types';

export type TDiscountCodeInfoRest = DiscountCodeInfo;
export type TDiscountCodeInfoGraphql = TCtpDiscountCodeInfo;

export type TCreateDiscountCodeInfoBuilder<
  TModel extends TDiscountCodeInfoRest | TDiscountCodeInfoGraphql,
> = () => TBuilder<TModel>;

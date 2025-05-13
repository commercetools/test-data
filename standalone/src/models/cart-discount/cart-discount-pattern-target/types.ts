import { CartDiscountPatternTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpCartDiscountPatternTarget,
  TCtpCartDiscountPatternTargetInput,
} from '@/graphql-types';

export type TCartDiscountPatternTargetRest = CartDiscountPatternTarget;
export type TCartDiscountPatternTargetGraphql = TCtpCartDiscountPatternTarget;
export type TCartDiscountPatternTargetDraftGraphql =
  TCtpCartDiscountPatternTargetInput;

export type TCreateCartDiscountPatternTargetBuilder<
  TModel extends
    | TCartDiscountPatternTargetRest
    | TCartDiscountPatternTargetGraphql
    | TCartDiscountPatternTargetDraftGraphql,
> = () => TBuilder<TModel>;

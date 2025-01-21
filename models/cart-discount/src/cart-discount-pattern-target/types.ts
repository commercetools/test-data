import { CartDiscountPatternTarget } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCartDiscountPatternTarget,
  TCtpCartDiscountPatternTargetInput,
} from '@commercetools-test-data/graphql-types';

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

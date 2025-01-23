import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCartDiscountPatternTargetInput } from '@commercetools-test-data/graphql-types';

export type TCartDiscountPatternTargetDraftGraphql =
  TCtpCartDiscountPatternTargetInput;

export type TCreateCartDiscountPatternTargetDraftBuilder<
  TModel extends TCartDiscountPatternTargetDraftGraphql,
> = () => TBuilder<TModel>;

import type { TBuilder } from '../../../../../core';
import { TCtpCartDiscountPatternTargetInput } from '../../../../../graphql-types';

export type TCartDiscountPatternTargetDraftGraphql =
  TCtpCartDiscountPatternTargetInput;

export type TCreateCartDiscountPatternTargetDraftBuilder<
  TModel extends TCartDiscountPatternTargetDraftGraphql,
> = () => TBuilder<TModel>;

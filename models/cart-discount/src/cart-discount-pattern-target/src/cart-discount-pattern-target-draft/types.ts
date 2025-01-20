import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCartDiscountPatternTargetInput as TCartDiscountPatternTargetDraft } from '@commercetools-test-data/graphql-types';

export type TCartDiscountPatternTargetDraftGraphql =
  TCartDiscountPatternTargetDraft;

export type TCreateCartDiscountPatternTargetDraftBuilder<
  TModel extends TCartDiscountPatternTargetDraftGraphql,
> = () => TBuilder<TModel>;

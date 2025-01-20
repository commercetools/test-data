import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCountOnCustomLineItemUnitsInput as TCountOnCustomLineItemUnitsDraft } from '@commercetools-test-data/graphql-types';

export type TCountOnCustomLineItemUnitsDraftGraphql =
  TCountOnCustomLineItemUnitsDraft;

export type TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TModel extends TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

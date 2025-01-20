import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCountOnLineItemUnitsInput as TCountOnLineItemUnitsDraft } from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsDraftGraphql = TCountOnLineItemUnitsDraft;

export type TCreateCountOnLineItemUnitsDraftBuilder<
  TModel extends TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

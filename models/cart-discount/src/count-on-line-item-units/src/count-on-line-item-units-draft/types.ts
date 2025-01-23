import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCountOnLineItemUnitsInput } from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsDraftGraphql = TCtpCountOnLineItemUnitsInput;

export type TCreateCountOnLineItemUnitsDraftBuilder<
  TModel extends TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

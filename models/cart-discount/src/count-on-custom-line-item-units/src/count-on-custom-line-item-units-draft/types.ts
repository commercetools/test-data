import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpCountOnCustomLineItemUnitsInput } from '@commercetools-test-data/graphql-types';

export type TCountOnCustomLineItemUnitsDraftGraphql =
  TCtpCountOnCustomLineItemUnitsInput;

export type TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TModel extends TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

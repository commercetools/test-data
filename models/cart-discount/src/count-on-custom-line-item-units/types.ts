import { CountOnCustomLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnCustomLineItemUnits,
  TCtpCountOnCustomLineItemUnitsInput as TCtpCountOnCustomLineItemUnitsDraft,
} from '@commercetools-test-data/graphql-types';

export type TCountOnCustomLineItemUnitsRest = CountOnCustomLineItemUnits;
export type TCountOnCustomLineItemUnitsGraphql = TCtpCountOnCustomLineItemUnits;
export type TCountOnCustomLineItemUnitsDraftGraphql =
  TCtpCountOnCustomLineItemUnitsDraft;

export type TCreateCountOnCustomLineItemUnitsBuilder<
  TModel extends
    | TCountOnCustomLineItemUnitsRest
    | TCountOnCustomLineItemUnitsGraphql
    | TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

import { CountOnLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnLineItemUnits,
  TCtpCountOnLineItemUnitsInput as TCountOnLineItemUnitsDraft,
} from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsRest = CountOnLineItemUnits;
export type TCountOnLineItemUnitsGraphql = TCtpCountOnLineItemUnits;
export type TCountOnLineItemUnitsDraftGraphql = TCountOnLineItemUnitsDraft;

export type TCreateCountOnLineItemUnitsBuilder<
  TModel extends
    | TCountOnLineItemUnitsRest
    | TCountOnLineItemUnitsGraphql
    | TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

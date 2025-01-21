import { CountOnLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnLineItemUnits,
  TCtpCountOnLineItemUnitsInput,
} from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsRest = CountOnLineItemUnits;
export type TCountOnLineItemUnitsGraphql = TCtpCountOnLineItemUnits;
export type TCountOnLineItemUnitsDraftGraphql = TCtpCountOnLineItemUnitsInput;

export type TCreateCountOnLineItemUnitsBuilder<
  TModel extends
    | TCountOnLineItemUnitsRest
    | TCountOnLineItemUnitsGraphql
    | TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

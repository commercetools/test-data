import { CountOnCustomLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnCustomLineItemUnits,
  TCtpCountOnCustomLineItemUnitsInput,
} from '@commercetools-test-data/graphql-types';

export type TCountOnCustomLineItemUnitsRest = CountOnCustomLineItemUnits;
export type TCountOnCustomLineItemUnitsGraphql = TCtpCountOnCustomLineItemUnits;
export type TCountOnCustomLineItemUnitsDraftGraphql =
  TCtpCountOnCustomLineItemUnitsInput;

export type TCreateCountOnCustomLineItemUnitsBuilder<
  TModel extends
    | TCountOnCustomLineItemUnitsRest
    | TCountOnCustomLineItemUnitsGraphql
    | TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

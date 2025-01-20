import { CountOnLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnLineItemUnits,
  //@TODO: Why do we declare the draft type here?
  TCtpCountOnLineItemUnitsInput as TCtpCountOnLineItemUnitsDraft,
} from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsRest = CountOnLineItemUnits;
export type TCountOnLineItemUnitsGraphql = TCtpCountOnLineItemUnits;
export type TCountOnLineItemUnitsDraftGraphql = TCtpCountOnLineItemUnitsDraft;

export type TCreateCountOnLineItemUnitsBuilder<
  TModel extends
    | TCountOnLineItemUnitsRest
    | TCountOnLineItemUnitsGraphql
    | TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

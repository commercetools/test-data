import { CountOnLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  TCtpCountOnLineItemUnits,
  TCtpCountOnLineItemUnitsInput,
} from '@commercetools-test-data/graphql-types';

export type TCountOnLineItemUnitsRest = Omit<
  CountOnLineItemUnits,
  'excludeCount'
>;
export type TCountOnLineItemUnitsGraphql = Omit<
  TCtpCountOnLineItemUnits,
  'excludeCount'
>;
export type TCountOnLineItemUnitsDraftGraphql = Omit<
  TCtpCountOnLineItemUnitsInput,
  'excludeCount'
>;

export type TCreateCountOnLineItemUnitsBuilder<
  TModel extends
    | TCountOnLineItemUnitsRest
    | TCountOnLineItemUnitsGraphql
    | TCountOnLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

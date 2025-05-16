import { CountOnLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import {
  TCtpCountOnLineItemUnits,
  TCtpCountOnLineItemUnitsInput,
} from '@/graphql-types';

//@TODO: remove Omit when CountOnLineItemUnits gets the excludeCount field in the SDK
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

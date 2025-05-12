import { CountOnCustomLineItemUnits } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import {
  TCtpCountOnCustomLineItemUnits,
  TCtpCountOnCustomLineItemUnitsInput,
} from '../../../graphql-types';

//@TODO: remove Omit when CountOnCustomLineItemUnits gets the excludeCount field in the SDK
export type TCountOnCustomLineItemUnitsRest = Omit<
  CountOnCustomLineItemUnits,
  'excludeCount'
>;
export type TCountOnCustomLineItemUnitsGraphql = Omit<
  TCtpCountOnCustomLineItemUnits,
  'excludeCount'
>;
export type TCountOnCustomLineItemUnitsDraftGraphql = Omit<
  TCtpCountOnCustomLineItemUnitsInput,
  'excludeCount'
>;

export type TCreateCountOnCustomLineItemUnitsBuilder<
  TModel extends
    | TCountOnCustomLineItemUnitsRest
    | TCountOnCustomLineItemUnitsGraphql
    | TCountOnCustomLineItemUnitsDraftGraphql,
> = () => TBuilder<TModel>;

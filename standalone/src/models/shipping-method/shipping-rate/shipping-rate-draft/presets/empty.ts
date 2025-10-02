import { type TBuilder } from '@/core';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';
import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../types';

const populatePreset = <
  TModel extends TShippingRateDraftGraphql | TShippingRateDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder;
};

export const restPreset = (): TBuilder<TShippingRateDraftRest> => {
  return populatePreset(RestModelBuilder())
    .freeAbove(undefined)
    .tiers(undefined);
};

export const graphqlPreset = (): TBuilder<TShippingRateDraftGraphql> => {
  return populatePreset(GraphqlModelBuilder())
    .freeAbove(undefined)
    .tiers(undefined);
};

export const compatPreset = (): TBuilder<TShippingRateDraftRest> => {
  return populatePreset(CompatModelBuilder())
    .freeAbove(undefined)
    .tiers(undefined);
};

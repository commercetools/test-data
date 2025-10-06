import { type TBuilder } from '@/core';
import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TShippingRateDraftGraphql | TShippingRateDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.freeAbove(undefined).tiers(undefined);
};

export const restPreset = (): TBuilder<TShippingRateDraftRest> => {
  return populatePreset(RestModelBuilder());
};

export const graphqlPreset = (): TBuilder<TShippingRateDraftGraphql> => {
  return populatePreset(GraphqlModelBuilder());
};

export const compatPreset = (): TBuilder<TShippingRateDraftRest> => {
  return populatePreset(CompatModelBuilder());
};

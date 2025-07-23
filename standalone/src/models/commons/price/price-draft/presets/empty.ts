import { TBuilder } from '@/core';
import { TPriceDraftGraphql, TPriceDraftRest } from '../../types';
import {
  GraphqlModelBuilder,
  RestModelBuilder,
  CompatModelBuilder,
} from '../builders';

const populateModel = <TModel extends TPriceDraftRest | TPriceDraftGraphql>(
  model: TBuilder<TModel>
): TBuilder<TModel> =>
  model
    .key(undefined)
    .country(undefined)
    .customerGroup(undefined)
    .channel(undefined)
    .validFrom(undefined)
    .validUntil(undefined)
    .tiers(undefined)
    .discounted(undefined)
    .custom(undefined)
    .recurrencePolicy(undefined);

export const graphqlPreset = () => {
  return populateModel(GraphqlModelBuilder());
};

export const restPreset = () => {
  return populateModel(RestModelBuilder());
};

export const compatPreset = () => {
  return populateModel(CompatModelBuilder());
};

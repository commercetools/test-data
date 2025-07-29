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
    .key(null)
    .country(null)
    .customerGroup(null)
    .channel(null)
    .validFrom(null)
    .validUntil(null)
    .tiers(null)
    .discounted(null)
    .custom(null)
    .recurrencePolicy(null);

export const graphqlPreset = () => {
  return populateModel(GraphqlModelBuilder());
};

export const restPreset = () => {
  return populateModel(RestModelBuilder());
};

export const compatPreset = () => {
  return populateModel(CompatModelBuilder());
};

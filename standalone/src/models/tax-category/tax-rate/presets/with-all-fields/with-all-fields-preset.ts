import { faker } from '@faker-js/faker';
import { TBuilder } from '@/core';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';
import { TTaxRateGraphql, TTaxRateRest } from '../../types';

const populatePreset = <TModel extends TTaxRateGraphql | TTaxRateRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .id(faker.string.uuid())
    .key(faker.lorem.slug(2))
    .state(faker.location.state())
    .subRates([]);
};

export const restPreset = (): TBuilder<TTaxRateRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TTaxRateGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TTaxRateRest | TTaxRateGraphql> =>
  populatePreset(CompatModelBuilder());

import { faker } from '@faker-js/faker';
import { TBuilder } from '@/core';
import type { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../../builders';

const populatePreset = <
  TModel extends TTaxRateDraftGraphql | TTaxRateDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .amount(Number(faker.finance.amount({ min: 0, max: 1, dec: 3 })))
    .key(faker.lorem.slug(2))
    .name(faker.lorem.words(2))
    .state(faker.location.state())
    .subRates([]);
};

export const restPreset = (): TBuilder<TTaxRateDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TTaxRateDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TTaxRateDraftRest | TTaxRateDraftGraphql
> => populatePreset(CompatModelBuilder());

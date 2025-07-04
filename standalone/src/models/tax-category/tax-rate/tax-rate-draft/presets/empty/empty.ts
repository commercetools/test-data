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
  return builder.amount(undefined).state(undefined).subRates(undefined);
};

export const restPreset = (): TBuilder<TTaxRateDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TTaxRateDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TTaxRateDraftRest | TTaxRateDraftGraphql
> => populatePreset(CompatModelBuilder());

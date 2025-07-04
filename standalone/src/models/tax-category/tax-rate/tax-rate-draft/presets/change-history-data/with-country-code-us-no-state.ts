import { TBuilder } from '@/core';
import type { TTaxRateDraftGraphql, TTaxRateDraftRest } from '../../../types';
import * as withAllFieldsPresets from '../with-all-fields/with-all-fields';

const populatePreset = <
  TModel extends TTaxRateDraftGraphql | TTaxRateDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder.country('US').state(null);
};

export const restPreset = (): TBuilder<TTaxRateDraftRest> =>
  populatePreset(withAllFieldsPresets.restPreset());

export const graphqlPreset = (): TBuilder<TTaxRateDraftGraphql> =>
  populatePreset(withAllFieldsPresets.graphqlPreset());

export const compatPreset = (): TBuilder<
  TTaxRateDraftRest | TTaxRateDraftGraphql
> => populatePreset(withAllFieldsPresets.compatPreset());

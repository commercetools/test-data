import type { TBuilder } from '@/core';
import { Location, LocationGraphql, LocationRest } from '../../index';
import type { TLocation, TLocationGraphql, TLocationRest } from '../../types';

const populatePreset = <TModel extends TLocationRest | TLocationGraphql>(
  builder: TBuilder<TModel>
) => builder.state(null);

export const restPreset = (): TBuilder<TLocationRest> =>
  populatePreset(LocationRest.random());

export const graphqlPreset = (): TBuilder<TLocationGraphql> =>
  populatePreset(LocationGraphql.random());

export const compatPreset = (): TBuilder<TLocation> =>
  populatePreset(Location.random());

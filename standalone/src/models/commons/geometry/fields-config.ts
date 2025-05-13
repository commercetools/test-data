import { fake, type TModelFieldsConfig } from '@/core';
import type { TGeometryGraphql, TGeometryRest } from './types';

const commonFieldsConfig = {
  type: fake(() => 'Point'),
  coordinates: fake((f) => [f.location.longitude(), f.location.latitude()]),
};

export const restFieldsConfig: TModelFieldsConfig<TGeometryRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TGeometryGraphql> = {
  fields: {
    ...commonFieldsConfig,
    __typename: 'Geometry',
  },
};

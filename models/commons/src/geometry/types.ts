import { GeoJson } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TGeometryRest = GeoJson;
export type TGeometryGraphql = GeoJson & {
  __typename: 'Geometry';
};

export type TCreateGeometryBuilder<
  TModel extends TGeometryRest | TGeometryGraphql
> = () => TBuilder<TModel>;

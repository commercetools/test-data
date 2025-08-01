import { TBuilder } from '@/core';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';
import { TImageGraphql, TImageRest } from '../types';

const populatePreset = <TModel extends TImageGraphql | TImageRest>(
  builder: TBuilder<TModel>
) => {
  return builder.label(undefined);
};

export const restPreset = (): TBuilder<TImageRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TImageGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<TImageRest | TImageGraphql> =>
  populatePreset(CompatModelBuilder());

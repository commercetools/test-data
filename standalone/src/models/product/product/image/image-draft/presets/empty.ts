import { TBuilder } from '@/core';
import { TImageDraftGraphql, TImageDraftRest } from '../../types';
import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from '../builders';

const populatePreset = <TModel extends TImageDraftGraphql | TImageDraftRest>(
  builder: TBuilder<TModel>
) => {
  return builder.label(undefined);
};

export const restPreset = (): TBuilder<TImageDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TImageDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TImageDraftRest | TImageDraftGraphql
> => populatePreset(CompatModelBuilder());

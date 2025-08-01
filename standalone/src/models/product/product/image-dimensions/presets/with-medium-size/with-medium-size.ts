import { TBuilder } from '@/core';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TImageDimensionsGraphql, TImageDimensionsRest } from '../../types';

export const restPreset = (): TBuilder<TImageDimensionsRest> =>
  RestModelBuilder().w(400).h(400);

export const graphqlPreset = (): TBuilder<TImageDimensionsGraphql> =>
  GraphqlModelBuilder().width(400).height(400);

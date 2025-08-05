import { TBuilder } from '@/core';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TImageDimensionsGraphql, TImageDimensionsRest } from '../../types';

export const restPreset = (): TBuilder<TImageDimensionsRest> =>
  RestModelBuilder().w(1400).h(1400);

export const graphqlPreset = (): TBuilder<TImageDimensionsGraphql> =>
  GraphqlModelBuilder().width(1400).height(1400);

import { TBuilder } from '@/core';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TImageDimensionsGraphql, TImageDimensionsRest } from '../../types';

export const restPreset = (): TBuilder<TImageDimensionsRest> =>
  RestModelBuilder().w(50).h(50);

export const graphqlPreset = (): TBuilder<TImageDimensionsGraphql> =>
  GraphqlModelBuilder().width(50).height(50);

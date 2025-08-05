import { TBuilder } from '@/core';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TImageDimensionsGraphql, TImageDimensionsRest } from '../../types';

export const restPreset = (): TBuilder<TImageDimensionsRest> =>
  RestModelBuilder().w(700).h(700);

export const graphqlPreset = (): TBuilder<TImageDimensionsGraphql> =>
  GraphqlModelBuilder().width(700).height(700);

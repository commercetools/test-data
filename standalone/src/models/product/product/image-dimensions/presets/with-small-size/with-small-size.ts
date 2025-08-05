import { TBuilder } from '@/core';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';
import { TImageDimensionsGraphql, TImageDimensionsRest } from '../../types';

export const restPreset = (): TBuilder<TImageDimensionsRest> =>
  RestModelBuilder().w(150).h(150);

export const graphqlPreset = (): TBuilder<TImageDimensionsGraphql> =>
  GraphqlModelBuilder().width(150).height(150);

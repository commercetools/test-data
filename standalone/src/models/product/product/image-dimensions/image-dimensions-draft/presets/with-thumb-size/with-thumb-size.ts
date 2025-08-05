import { TBuilder } from '@/core';
import {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../../../types';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';

export const restPreset = (): TBuilder<TImageDimensionsDraftRest> =>
  RestModelBuilder().w(50).h(50);

export const graphqlPreset = (): TBuilder<TImageDimensionsDraftGraphql> =>
  GraphqlModelBuilder().width(50).height(50);

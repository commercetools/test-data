import { TBuilder } from '@/core';
import {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../../../types';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';

export const restPreset = (): TBuilder<TImageDimensionsDraftRest> =>
  RestModelBuilder().w(400).h(400);

export const graphqlPreset = (): TBuilder<TImageDimensionsDraftGraphql> =>
  GraphqlModelBuilder().width(400).height(400);

import { TBuilder } from '@/core';
import {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../../../types';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';

export const restPreset = (): TBuilder<TImageDimensionsDraftRest> =>
  RestModelBuilder().w(1400).h(1400);

export const graphqlPreset = (): TBuilder<TImageDimensionsDraftGraphql> =>
  GraphqlModelBuilder().width(1400).height(1400);

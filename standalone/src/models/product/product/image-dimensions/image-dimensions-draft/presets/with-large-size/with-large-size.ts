import { TBuilder } from '@/core';
import {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../../../types';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';

export const restPreset = (): TBuilder<TImageDimensionsDraftRest> =>
  RestModelBuilder().w(700).h(700);

export const graphqlPreset = (): TBuilder<TImageDimensionsDraftGraphql> =>
  GraphqlModelBuilder().width(700).height(700);

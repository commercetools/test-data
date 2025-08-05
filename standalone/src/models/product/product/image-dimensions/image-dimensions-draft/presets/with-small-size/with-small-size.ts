import { TBuilder } from '@/core';
import {
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../../../types';
import { GraphqlModelBuilder, RestModelBuilder } from '../../builders';

export const restPreset = (): TBuilder<TImageDimensionsDraftRest> =>
  RestModelBuilder().w(150).h(150);

export const graphqlPreset = (): TBuilder<TImageDimensionsDraftGraphql> =>
  GraphqlModelBuilder().width(150).height(150);

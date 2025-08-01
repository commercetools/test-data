import { createSpecializedBuilder } from '@/core';
import type {
  TCreateImageDimensionsBuilder,
  TImageDimensionsDraftGraphql,
  TImageDimensionsDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateImageDimensionsBuilder<
  TImageDimensionsDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ImageDimensionsDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateImageDimensionsBuilder<
  TImageDimensionsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ImageDimensionsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

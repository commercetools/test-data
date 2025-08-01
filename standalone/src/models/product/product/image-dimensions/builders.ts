import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateImageDimensionsBuilder,
  TImageDimensionsGraphql,
  TImageDimensionsRest,
} from './types';

export const RestModelBuilder: TCreateImageDimensionsBuilder<
  TImageDimensionsRest
> = () =>
  createSpecializedBuilder({
    name: 'ImageDimensionsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateImageDimensionsBuilder<
  TImageDimensionsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ImageDimensionsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

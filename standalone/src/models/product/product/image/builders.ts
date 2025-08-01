import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import { TImageGraphql, TImageRest, TCreateImageBuilder } from './types';

export const RestModelBuilder: TCreateImageBuilder<TImageRest> = () =>
  createSpecializedBuilder({
    name: 'ImageRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateImageBuilder<TImageGraphql> = () =>
  createSpecializedBuilder({
    name: 'ImageGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TImageModel extends TImageRest | TImageGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatImageModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TImageModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TImageModel>,
    },
  });

import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import {
  TImageDraftGraphql,
  TImageDraftRest,
  TCreateImageBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateImageBuilder<TImageDraftRest> = () =>
  createSpecializedBuilder({
    name: 'ImageDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateImageBuilder<
  TImageDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ImageDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TImageDraftModel extends TImageDraftRest | TImageDraftGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatImageDraftModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TImageDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TImageDraftModel>,
    },
  });

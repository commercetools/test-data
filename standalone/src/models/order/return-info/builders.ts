import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TReturnInfoGraphql,
  TReturnInfoRest,
  TCreateReturnInfoBuilder,
} from './types';

export const RestModelBuilder: TCreateReturnInfoBuilder<TReturnInfoRest> = () =>
  createSpecializedBuilder({
    name: 'ReturnInfoRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateReturnInfoBuilder<
  TReturnInfoGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ReturnInfoGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatReturnInfoModelBuilder = <
  TCreateReturnInfoModel extends TReturnInfoGraphql | TReturnInfoRest,
>() =>
  createCompatibilityBuilder({
    name: 'ReturnInfoCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateReturnInfoModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateReturnInfoModel>,
    },
  });

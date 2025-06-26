import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TParcelGraphql,
  TParcelRest,
  TCreateParcelBuilder,
} from './types';

export const RestModelBuilder: TCreateParcelBuilder<TParcelRest> = () =>
  createSpecializedBuilder({
    name: 'ParcelRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateParcelBuilder<TParcelGraphql> = () =>
  createSpecializedBuilder({
    name: 'ParcelGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatParcelModelBuilder = <
  TCreateParcelModel extends TParcelGraphql | TParcelRest,
>() =>
  createCompatibilityBuilder({
    name: 'ParcelCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateParcelModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCreateParcelModel>,
    },
  });

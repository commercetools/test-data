import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import {
  TCreateProductSelectionSettingBuilder,
  TProductSelectionSettingGraphql,
  TProductSelectionSettingRest,
} from './types';

export const RestModelBuilder: TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingRest
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'ProductSelectionSettingRestBuilder',
  });

export const GraphqlModelBuilder: TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'ProductSelectionSettingGraphqlBuilder',
  });

export const CompatModelBuilder = <
  TProductSelectionSettingModel extends
    | TProductSelectionSettingGraphql
    | TProductSelectionSettingRest,
>() =>
  createCompatibilityBuilder<TProductSelectionSettingModel>({
    name: 'ProductSelectionSettingCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductSelectionSettingModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TProductSelectionSettingModel>,
    },
  });

import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import {
  TCreateProductSelectionSettingBuilder,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingDraftRest
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'ProductSelectionSettingDraftRestBuilder',
  });

export const GraphqlModelBuilder: TCreateProductSelectionSettingBuilder<
  TProductSelectionSettingDraftGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'ProductSelectionSettingDraftGraphqlBuilder',
  });

export const CompatModelBuilder = <
  TProductSelectionSettingDraftModel extends
    | TProductSelectionSettingDraftGraphql
    | TProductSelectionSettingDraftRest,
>() =>
  createCompatibilityBuilder<TProductSelectionSettingDraftModel>({
    name: 'ProductSelectionSettingDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TProductSelectionSettingDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TProductSelectionSettingDraftModel>,
    },
  });

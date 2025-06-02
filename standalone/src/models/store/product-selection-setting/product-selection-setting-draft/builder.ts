import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import {
  TCreateProductSelectionSettingDraftBuilder,
  TProductSelectionSettingDraftGraphql,
  TProductSelectionSettingDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateProductSelectionSettingDraftBuilder<
  TProductSelectionSettingDraftRest
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldsConfig,
    type: 'rest',
    name: 'product-selection-setting-draft',
  });

export const GraphqlModelBuilder: TCreateProductSelectionSettingDraftBuilder<
  TProductSelectionSettingDraftGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldsConfig,
    type: 'graphql',
    name: 'product-selection-setting-draft',
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

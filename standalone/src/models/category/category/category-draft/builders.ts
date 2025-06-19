import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateCategoryBuilder,
  TCategoryDraftGraphql,
  TCategoryDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCategoryBuilder<
  TCategoryDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CategoryDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const RestModelBuilder: TCreateCategoryBuilder<
  TCategoryDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'CategoryDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const CompatModelBuilder = <
  TCategoryDraftModel extends
    | TCategoryDraftRest
    | TCategoryDraftGraphql = TCategoryDraftRest,
>() =>
  createCompatibilityBuilder<TCategoryDraftModel>({
    name: 'CategoryDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCategoryDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCategoryDraftModel>,
    },
  });

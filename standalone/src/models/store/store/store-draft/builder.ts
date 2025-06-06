import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import type {
  TCreateStoreDraftBuilder,
  TStoreDraftRest,
  TStoreDraftGraphql,
} from '../types';
import { restFieldConfig, graphqlFieldConfig } from './fields-config';

export const RestModelBuilder: TCreateStoreDraftBuilder<TStoreDraftRest> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: restFieldConfig,
    type: 'rest',
    name: 'storeDraft',
  });

export const GraphqlModelBuilder: TCreateStoreDraftBuilder<
  TStoreDraftGraphql
> = () =>
  createSpecializedBuilder({
    modelFieldsConfig: graphqlFieldConfig,
    type: 'graphql',
    name: 'storeDraft',
  });

export const CompatModelBuilder = <
  TStoreDraftModel extends TStoreDraftRest | TStoreDraftGraphql,
>() =>
  createCompatibilityBuilder<TStoreDraftModel>({
    name: 'storeDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldConfig as TModelFieldsConfig<TStoreDraftModel>,
      graphql: graphqlFieldConfig as TModelFieldsConfig<TStoreDraftModel>,
    },
  });

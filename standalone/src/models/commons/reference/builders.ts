import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TReferenceRest,
  TReferenceGraphql,
  TCreateReferenceBuilder,
} from './types';

export const RestModelBuilder: TCreateReferenceBuilder<TReferenceRest> = () =>
  createSpecializedBuilder({
    name: 'ReferenceRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateReferenceBuilder<
  TReferenceGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ReferenceGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TReferenceModel extends TReferenceRest | TReferenceGraphql = TReferenceRest,
>() =>
  createCompatibilityBuilder<TReferenceModel>({
    name: 'ReferenceCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TReferenceModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TReferenceModel>,
    },
  });

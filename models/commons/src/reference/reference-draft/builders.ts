import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TReferenceDraftRest,
  TReferenceDraftGraphql,
  TCreateReferenceBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateReferenceBuilder<
  TReferenceDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ReferenceDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateReferenceBuilder<
  TReferenceDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ReferenceDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TReferenceModel extends
    | TReferenceDraftRest
    | TReferenceDraftGraphql = TReferenceDraftRest,
>() =>
  createCompatibilityBuilder<TReferenceModel>({
    name: 'ReferenceDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TReferenceModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TReferenceModel>,
    },
  });

import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import type {
  TCreateAttributePlainEnumValueBuilder,
  TAttributePlainEnumValueDraftGraphql,
  TAttributePlainEnumValueDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'AttributelainEnumValueDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateAttributePlainEnumValueBuilder<
  TAttributePlainEnumValueDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'AttributelainEnumValueDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TAttributePlainEnumValueDraftModel extends
    | TAttributePlainEnumValueDraftRest
    | TAttributePlainEnumValueDraftGraphql = TAttributePlainEnumValueDraftRest,
>() =>
  createCompatibilityBuilder<TAttributePlainEnumValueDraftModel>({
    name: 'AttributelainEnumValueDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TAttributePlainEnumValueDraftModel>,
    },
  });

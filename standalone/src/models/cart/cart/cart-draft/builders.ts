import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  TModelFieldsConfig,
} from '../../../../core';
import {
  TCartDraftGraphql,
  TCartDraftRest,
  TCreateCartBuilder,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateCartBuilder<TCartDraftRest> = () =>
  createSpecializedBuilder({
    name: 'CartDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCartBuilder<TCartDraftGraphql> = () =>
  createSpecializedBuilder({
    name: 'CartDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatCartModelBuilder = <
  TCartModel extends TCartDraftRest | TCartDraftGraphql = TCartDraftRest,
>() =>
  createCompatibilityBuilder<TCartModel>({
    name: 'CartDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCartModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCartModel>,
    },
  });

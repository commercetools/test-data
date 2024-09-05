import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

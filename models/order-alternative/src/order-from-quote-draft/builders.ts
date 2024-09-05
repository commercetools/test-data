import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'RestOrderBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'GraphqlOrderBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

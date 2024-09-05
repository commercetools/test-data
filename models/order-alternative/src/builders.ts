import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import { TCreateOrderBuilder, TOrderGraphql, TOrderRest } from './types';

export const RestModelBuilder: TCreateOrderBuilder<TOrderRest> = () =>
  createSpecializedBuilder({
    name: 'RestOrderBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<TOrderGraphql> = () =>
  createSpecializedBuilder({
    name: 'GraphqlOrderBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

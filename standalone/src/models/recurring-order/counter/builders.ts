import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateCounterBuilder,
  TCounterGraphql,
  TCounterRest,
} from './types';

export const RestModelBuilder: TCreateCounterBuilder<TCounterRest> = () =>
  createSpecializedBuilder({
    name: 'CounterRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCounterBuilder<TCounterGraphql> = () =>
  createSpecializedBuilder({
    name: 'CounterGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

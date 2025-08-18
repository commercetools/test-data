import { createSpecializedBuilder } from '@/core';
import type {
  TCreateCounterBuilder,
  TCounterDraftGraphql,
  TCounterDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateCounterBuilder<TCounterDraftRest> = () =>
  createSpecializedBuilder({
    name: 'CounterDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCounterBuilder<
  TCounterDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CounterDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

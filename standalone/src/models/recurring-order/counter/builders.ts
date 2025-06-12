import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateCounterBuilder, TCounterGraphql } from './types';

export const GraphqlModelBuilder: TCreateCounterBuilder<TCounterGraphql> = () =>
  createSpecializedBuilder({
    name: 'counterGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

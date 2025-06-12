import { createSpecializedBuilder } from '@/core';
import type { TCreateCounterBuilder, TCounterDraftGraphql } from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCounterBuilder<
  TCounterDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'counterDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

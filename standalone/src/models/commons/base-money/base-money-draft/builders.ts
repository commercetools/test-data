import { createSpecializedBuilder } from '@/core';
import type { TCreateBaseMoneyBuilder } from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateBaseMoneyBuilder = () =>
  createSpecializedBuilder({
    name: 'BaseMoneyDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

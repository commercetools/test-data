import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateSelectionOfProductBuilder } from './types';

export const GraphqlModelBuilder: TCreateSelectionOfProductBuilder = () =>
  createSpecializedBuilder({
    name: 'SelectionOfProductGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

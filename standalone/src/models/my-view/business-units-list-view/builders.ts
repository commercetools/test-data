import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateBusinessUnitsListMyViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateBusinessUnitsListMyViewBuilder = () =>
  createSpecializedBuilder({
    name: 'BusinessUnitsListMyViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

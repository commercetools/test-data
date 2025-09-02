import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateBusinessUnitsListViewBuilder } from './types';

export const GraphqlModelBuilder: TCreateBusinessUnitsListViewBuilder = () =>
  createSpecializedBuilder({
    name: 'BusinessUnitsListViewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

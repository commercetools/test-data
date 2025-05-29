import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationDeploymentPreviewGraphql,
  TCreateCustomApplicationDeploymentPreviewBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationDeploymentPreviewBuilder<
  TCustomApplicationDeploymentPreviewGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationDeploymentPreviewGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

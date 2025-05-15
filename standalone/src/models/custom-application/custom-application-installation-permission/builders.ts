import { createSpecializedBuilder } from '../../../core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationInstallationPermissionGraphql,
  TCreateCustomApplicationInstallationPermissionBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationInstallationPermissionBuilder<
  TCustomApplicationInstallationPermissionGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationInstallationPermissionGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

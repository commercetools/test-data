import { createSpecializedBuilder } from '../../../core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCustomApplicationInstallationGraphql,
  TCreateCustomApplicationInstallationBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCustomApplicationInstallationBuilder<
  TCustomApplicationInstallationGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomApplicationInstallationGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

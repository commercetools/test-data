import { createSpecializedBuilder } from '@/core';
import type {
  TCategorySearchGraphql,
  TCreateCategoryTypeBuilder,
} from '../category/types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateCategoryTypeBuilder<
  TCategorySearchGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CategorySearchGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

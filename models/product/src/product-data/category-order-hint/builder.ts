import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCategoryOrderHintGraphql,
  TCreateCategoryOrderHintBuilder,
} from './types';

export const GraphqlModelBuilder: TCreateCategoryOrderHintBuilder<
  TCategoryOrderHintGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CategoryOrderHintGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

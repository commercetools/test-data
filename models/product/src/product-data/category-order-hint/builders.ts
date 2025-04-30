import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCategoryOrderHintGraphql,
  TCategoryOrderHintRest,
  TCreateCategoryOrderHintBuilder,
} from './types';

export const RestModelBuilder: TCreateCategoryOrderHintBuilder<
  TCategoryOrderHintRest
> = () =>
  createSpecializedBuilder({
    name: 'CategoryOrderHintRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCategoryOrderHintBuilder<
  TCategoryOrderHintGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CategoryOrderHintGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

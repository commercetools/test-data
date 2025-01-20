import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCountOnLineItemUnitsDraftBuilder,
  TCountOnLineItemUnitsDraftGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateCountOnLineItemUnitsDraftBuilder<
  TCountOnLineItemUnitsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnLineItemUnitsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

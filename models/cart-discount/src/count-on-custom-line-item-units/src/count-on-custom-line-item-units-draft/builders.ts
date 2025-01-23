import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCountOnCustomLineItemUnitsDraftBuilder,
  TCountOnCustomLineItemUnitsDraftGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TCountOnCustomLineItemUnitsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnCustomLineItemUnitsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

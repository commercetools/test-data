import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { TCountOnCustomLineItemUnitsDraftGraphql } from '../../types';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateCountOnCustomLineItemUnitsDraftBuilder } from './types';

export const GraphqlModelBuilder: TCreateCountOnCustomLineItemUnitsDraftBuilder<
  TCountOnCustomLineItemUnitsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnCustomLineItemUnitsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

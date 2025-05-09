import { createSpecializedBuilder } from '../../../../../core';
import { TCountOnLineItemUnitsDraftGraphql } from '../../types';
import { graphqlFieldsConfig } from './fields-config';
import type { TCreateCountOnLineItemUnitsDraftBuilder } from './types';

export const GraphqlModelBuilder: TCreateCountOnLineItemUnitsDraftBuilder<
  TCountOnLineItemUnitsDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnLineItemUnitsDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

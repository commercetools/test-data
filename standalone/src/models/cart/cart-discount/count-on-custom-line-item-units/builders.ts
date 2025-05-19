import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCountOnCustomLineItemUnitsBuilder,
  TCountOnCustomLineItemUnitsGraphql,
  TCountOnCustomLineItemUnitsRest,
} from './types';

export const RestModelBuilder: TCreateCountOnCustomLineItemUnitsBuilder<
  TCountOnCustomLineItemUnitsRest
> = () =>
  createSpecializedBuilder({
    name: 'CountOnCustomLineItemUnitsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCountOnCustomLineItemUnitsBuilder<
  TCountOnCustomLineItemUnitsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnCustomLineItemUnitsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

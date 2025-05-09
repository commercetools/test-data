import { createSpecializedBuilder } from '../../../core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateCountOnLineItemUnitsBuilder,
  TCountOnLineItemUnitsGraphql,
  TCountOnLineItemUnitsRest,
} from './types';

export const RestModelBuilder: TCreateCountOnLineItemUnitsBuilder<
  TCountOnLineItemUnitsRest
> = () =>
  createSpecializedBuilder({
    name: 'CountOnLineItemUnitsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCountOnLineItemUnitsBuilder<
  TCountOnLineItemUnitsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CountOnLineItemUnitsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';
import { restInitializers, graphqlInitializers } from './initializers';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'RestOrderBuilder',
    type: 'rest',
    initializationConfig: restInitializers,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'GraphqlOrderBuilder',
    type: 'graphql',
    initializationConfig: graphqlInitializers,
  });

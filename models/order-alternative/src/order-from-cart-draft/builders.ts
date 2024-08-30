import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../types';
import { restInitializers, graphqlInitializers } from './initializers';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftRestBuilder',
    type: 'rest',
    initializationConfig: restInitializers,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'OrderFromCartDraftGraphqlBuilder',
    type: 'graphql',
    initializationConfig: graphqlInitializers,
  });

import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restInitializers, graphqlInitializers } from './initializers';
import { TCreateOrderBuilder, TOrderGraphql, TOrderRest } from './types';

export const RestModelBuilder: TCreateOrderBuilder<TOrderRest> = () =>
  createSpecializedBuilder({
    name: 'RestOrderBuilder',
    type: 'rest',
    initializationConfig: restInitializers,
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<TOrderGraphql> = () =>
  createSpecializedBuilder({
    name: 'GraphqlOrderBuilder',
    type: 'graphql',
    initializationConfig: graphqlInitializers,
  });

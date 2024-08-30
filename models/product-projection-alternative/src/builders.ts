import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlInitializers, restInitializers } from './initializers';
import type {
  TCreateProductProjectionBuilder,
  TProductProjectionRest,
  TProductProjectionGraphql,
} from './types';

export const RestModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionRest
> = () => {
  return createSpecializedBuilder({
    name: 'ProductProjectionRestBuilder',
    type: 'rest',
    initializationConfig: restInitializers,
  });
};

export const GraphqlModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionGraphql
> = () => {
  return createSpecializedBuilder({
    name: 'ProductProjectionGraphqlBuilder',
    type: 'graphql',
    initializationConfig: graphqlInitializers,
  });
};

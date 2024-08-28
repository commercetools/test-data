import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { restGenerator, graphqlGenerator } from './generators';
import type {
  TCreateProductProjectionBuilder,
  TProductProjectionRest,
  TProductProjectionGraphql,
} from './types';

export const RestModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionRest
> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
  });

export const GraphqlModelBuilder: TCreateProductProjectionBuilder<
  TProductProjectionGraphql
> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
    type: 'graphql',
  });

import { createSpecializedBuilder } from '@commercetools-test-data/core';
import { graphqlGenerator, restGenerator } from './generators';
import { TCreateOrderBuilder, TOrderGraphql, TOrderRest } from './types';

export const RestModelBuilder: TCreateOrderBuilder<TOrderRest> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<TOrderGraphql> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
    type: 'graphql',
  });

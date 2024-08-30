import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../types';
import { graphqlGenerator, restGenerator } from './generators';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'RestOrderBuilder',
    generator: restGenerator,
    type: 'rest',
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromQuoteDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'GraphqlOrderBuilder',
    generator: graphqlGenerator,
    type: 'graphql',
  });

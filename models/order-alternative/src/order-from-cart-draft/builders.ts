import { createSpecializedBuilder } from '@commercetools-test-data/core';
import {
  TCreateOrderBuilder,
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../types';
import { graphqlGenerator, restGenerator } from './generators';

export const RestModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftRest
> = () =>
  createSpecializedBuilder({
    generator: restGenerator,
    type: 'rest',
    buildFields: ['cart', 'state'],
  });

export const GraphqlModelBuilder: TCreateOrderBuilder<
  TOrderFromCartDraftGraphql
> = () =>
  createSpecializedBuilder({
    generator: graphqlGenerator,
    type: 'graphql',
    buildFields: ['cart', 'state'],
  });

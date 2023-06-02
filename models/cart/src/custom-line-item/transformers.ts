import { Transformer } from '@commercetools-test-data/core';
import type { TCustomLineItem, TCustomLineItemGraphql } from './types';

const transformers = {
  default: Transformer<TCustomLineItem, TCustomLineItem>('default', {
    buildFields: ['money', 'name'],
  }),
  rest: Transformer<TCustomLineItem, TCustomLineItem>('rest', {
    buildFields: ['money', 'name'],
  }),
  //scaffolding only
  graphql: Transformer<TCustomLineItem, TCustomLineItemGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'CustomLineItem',
    }),
  }),
};

export default transformers;

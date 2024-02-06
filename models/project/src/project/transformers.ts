import { Transformer } from '@commercetools-test-data/core';
import type { TProject, TProjectGraphql } from './types';

const transformers = {
  default: Transformer<TProject, TProject>('default', {
    buildFields: [
      'businessUnits',
      'searchIndexing',
      'carts',
      'messages',
      'externalOAuth',
      'shippingRateInputType',
      'shoppingLists',
    ],
  }),
  rest: Transformer<TProject, TProject>('rest', {
    buildFields: [
      'businessUnits',
      'searchIndexing',
      'carts',
      'messages',
      'externalOAuth',
      'shippingRateInputType',
      'shoppingLists',
    ],
  }),
  graphql: Transformer<TProject, TProjectGraphql>('graphql', {
    buildFields: [
      'businessUnits',
      'searchIndexing',
      'carts',
      'messages',
      'externalOAuth',
      'shippingRateInputType',
      'shoppingLists',
    ],
    addFields: () => ({
      __typename: 'Project',
    }),
  }),
};

export default transformers;

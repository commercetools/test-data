import { Transformer } from '@commercetools-test-data/core';
import type { TProject, TProjectGraphql } from './types';

const buildFields: (keyof TProject)[] = [
  'businessUnits',
  'searchIndexing',
  'carts',
  'messages',
  'externalOAuth',
  'shippingRateInputType',
  'shoppingLists',
];

const transformers = {
  default: Transformer<TProject, TProject>('default', {
    buildFields,
  }),
  rest: Transformer<TProject, TProject>('rest', {
    buildFields,
  }),
  graphql: Transformer<TProject, TProjectGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'Project',
    }),
  }),
};

export default transformers;

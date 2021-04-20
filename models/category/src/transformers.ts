import type { TCategory, TCategoryGraphql } from './types';
import { Transformer } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/categories
const transformers = {
  graphql: Transformer<TCategory, TCategoryGraphql>('graphql', {
    addFields: () => ({
      __typename: 'Category',
    }),
  }),
};

export default transformers;

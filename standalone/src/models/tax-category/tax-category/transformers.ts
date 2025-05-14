import { Transformer } from '@/core';
import type { TTaxCategory, TTaxCategoryGraphql } from './types';

const transformers = {
  default: Transformer<TTaxCategory, TTaxCategory>('default', {
    buildFields: ['createdBy', 'lastModifiedBy', 'rates'],
  }),
  rest: Transformer<TTaxCategory, TTaxCategory>('rest', {
    buildFields: ['createdBy', 'lastModifiedBy', 'rates'],
  }),
  graphql: Transformer<TTaxCategory, TTaxCategoryGraphql>('graphql', {
    buildFields: ['createdBy', 'lastModifiedBy', 'rates'],
    addFields: () => ({
      __typename: 'TaxCategory',
    }),
  }),
};

export default transformers;

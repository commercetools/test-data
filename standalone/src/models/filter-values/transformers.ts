import { Transformer } from '@/core';
import type { TFilterValues, TFilterValuesGraphql } from './types';

const transformers = {
  default: Transformer<TFilterValues, TFilterValues>('default', {
    buildFields: [],
  }),
  rest: Transformer<TFilterValues, TFilterValues>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TFilterValues, TFilterValuesGraphql>('graphql', {
    buildFields: [],
    addFields: () => ({
      __typename: 'FilterValues',
    }),
  }),
};

export default transformers;

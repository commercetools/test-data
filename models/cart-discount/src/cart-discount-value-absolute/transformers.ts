import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountValueAbsolute,
  TCartDiscountValueAbsoluteGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartDiscountValueAbsolute, TCartDiscountValueAbsolute>(
    'default',
    {
      buildFields: ['money'],
    }
  ),
  rest: Transformer<TCartDiscountValueAbsolute, TCartDiscountValueAbsolute>(
    'rest',
    {
      buildFields: ['money'],
    }
  ),
  graphql: Transformer<
    TCartDiscountValueAbsolute,
    TCartDiscountValueAbsoluteGraphql
  >('graphql', {
    buildFields: ['money'],
    addFields: () => ({
      __typename: 'CartDiscountValueAbsolute',
    }),
  }),
};

export default transformers;

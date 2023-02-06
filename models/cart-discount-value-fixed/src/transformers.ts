import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountValueFixed,
  TCartDiscountValueFixedGraphql,
} from './types';

const transformers = {
  default: Transformer<TCartDiscountValueFixed, TCartDiscountValueFixed>(
    'default',
    {
      buildFields: ['money'],
    }
  ),
  rest: Transformer<TCartDiscountValueFixed, TCartDiscountValueFixed>('rest', {
    buildFields: ['money'],
  }),
  graphql: Transformer<TCartDiscountValueFixed, TCartDiscountValueFixedGraphql>(
    'graphql',
    {
      buildFields: ['money'],
      addFields: () => ({
        __typename: 'CartDiscountValueFixed',
      }),
    }
  ),
};

export default transformers;

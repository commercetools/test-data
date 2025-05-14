import { Transformer } from '@/core';
import type { THighPrecisionMoney, THighPrecisionMoneyGraphql } from './types';

const transformers = {
  default: Transformer<THighPrecisionMoney, THighPrecisionMoney>('default', {
    buildFields: [],
  }),
  rest: Transformer<THighPrecisionMoney, THighPrecisionMoney>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<THighPrecisionMoney, THighPrecisionMoneyGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'HighPrecisionMoney',
      }),
    }
  ),
};

export default transformers;

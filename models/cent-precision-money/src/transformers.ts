import { Transformer } from '@commercetools-test-data/core';
import type { TCentPrecisionMoney, TCentPrecisionMoneyGraphql } from './types';

const transformers = {
  default: Transformer<TCentPrecisionMoney, TCentPrecisionMoney>('default', {
    buildFields: [],
  }),
  rest: Transformer<TCentPrecisionMoney, TCentPrecisionMoney>('rest', {
    buildFields: [],
  }),
  graphql: Transformer<TCentPrecisionMoney, TCentPrecisionMoneyGraphql>(
    'graphql',
    {
      buildFields: [],
      addFields: () => ({
        __typename: 'Money',
      }),
    }
  ),
};

export default transformers;

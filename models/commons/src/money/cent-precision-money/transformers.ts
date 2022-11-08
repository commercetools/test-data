import { Transformer } from '@commercetools-test-data/core';
import type { TCentPrecisionMoney, TMoneyGraphql } from '../types';
import { defaultFractionDigits, fractionDigits } from '../constants';

const getFractionDigits = (currencyCode: string): number => {
  if (Object.keys(fractionDigits).includes(currencyCode)) {
    return fractionDigits[currencyCode].fractionDigits;
  }
  return defaultFractionDigits;
};

const transformers = {
  default: Transformer<TCentPrecisionMoney, TCentPrecisionMoney>('default', {
    replaceFields: ({ fields }) => ({
      ...fields,
      fractionDigits: getFractionDigits(fields.currencyCode),
    }),
  }),
  rest: Transformer<TCentPrecisionMoney, TCentPrecisionMoney>('rest', {
    replaceFields: ({ fields }) => ({
      ...fields,
      fractionDigits: getFractionDigits(fields.currencyCode),
    }),
  }),
  graphql: Transformer<TCentPrecisionMoney, TMoneyGraphql>('graphql', {
    replaceFields: ({ fields }) => ({
      ...fields,
      fractionDigits: getFractionDigits(fields.currencyCode),
      __typename: 'Money',
    }),
  }),
};

export default transformers;

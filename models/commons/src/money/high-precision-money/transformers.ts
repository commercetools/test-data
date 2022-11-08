import { Transformer } from '@commercetools-test-data/core';
import type { THighPrecisionMoney, THighPrecisionMoneyGraphql } from '../types';
import { defaultFractionDigits, fractionDigits } from '../constants';

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getHighPrecisionFractionDigits = (currencyCode: string): number => {
  if (Object.keys(fractionDigits).includes(currencyCode)) {
    return randomIntFromInterval(
      fractionDigits[currencyCode].fractionDigits + 1,
      20
    );
  }
  return defaultFractionDigits;
};

const transformers = {
  default: Transformer<THighPrecisionMoney, THighPrecisionMoney>('default', {
    replaceFields: ({ fields }) => ({
      ...fields,
      fractionDigits: getHighPrecisionFractionDigits(fields.currencyCode),
    }),
  }),
  rest: Transformer<THighPrecisionMoney, THighPrecisionMoney>('rest', {
    replaceFields: ({ fields }) => ({
      ...fields,
      fractionDigits: getHighPrecisionFractionDigits(fields.currencyCode),
    }),
  }),
  graphql: Transformer<THighPrecisionMoney, THighPrecisionMoneyGraphql>(
    'graphql',
    {
      replaceFields: ({ fields }) => ({
        ...fields,
        fractionDigits: getHighPrecisionFractionDigits(fields.currencyCode),
        __typename: 'HighPrecisionMoney',
      }),
    }
  ),
};

export default transformers;

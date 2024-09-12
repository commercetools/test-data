import { Transformer } from '@commercetools-test-data/core';
import {
  TTaxedItemPrice,
  TTaxedItemPriceGraphql,
  TTaxedItemPriceRest,
} from './types';

const buildFields: (keyof TTaxedItemPrice)[] = [
  'totalNet',
  'totalGross',
  'taxPortions',
  'totalTax',
];

const transformers = {
  default: Transformer<TTaxedItemPrice, TTaxedItemPrice>('default', {
    buildFields,
  }),
  rest: Transformer<TTaxedItemPrice, TTaxedItemPriceRest>('rest', {
    buildFields,
  }),
  graphql: Transformer<TTaxedItemPrice, TTaxedItemPriceGraphql>('graphql', {
    buildFields,
    addFields: () => ({
      __typename: 'TaxedItemPrice',
    }),
  }),
};

export default transformers;

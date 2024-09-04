import { Transformer } from '@commercetools-test-data/core';
import {
  TDiscountedLineItemPrice,
  TDiscountedLineItemPriceRest,
  TDiscountedLineItemPriceGraphql,
} from './types';

const buildFields: (keyof TDiscountedLineItemPrice)[] = [
  'value',
  'includedDiscounts',
];

const transformers = {
  default: Transformer<TDiscountedLineItemPrice, TDiscountedLineItemPrice>(
    'default',
    {
      buildFields,
    }
  ),
  rest: Transformer<TDiscountedLineItemPrice, TDiscountedLineItemPriceRest>(
    'rest',
    {
      buildFields,
    }
  ),
  graphql: Transformer<
    TDiscountedLineItemPrice,
    TDiscountedLineItemPriceGraphql
  >('graphql', {
    buildFields,
    addFields: ({ fields }) => ({
      __typename: 'DiscountedLineItemPrice',
    }),
  }),
};

export default transformers;

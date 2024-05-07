import { Transformer } from '@commercetools-test-data/core';
import type {
  TCartDiscountValueGiftLineItem,
  TCartDiscountValueGiftLineItemGraphql,
} from './types';

const transformers = {
  default: Transformer<
    TCartDiscountValueGiftLineItem,
    TCartDiscountValueGiftLineItem
  >('default', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
  }),
  rest: Transformer<
    TCartDiscountValueGiftLineItem,
    TCartDiscountValueGiftLineItem
  >('rest', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
  }),
  graphql: Transformer<
    TCartDiscountValueGiftLineItem,
    TCartDiscountValueGiftLineItemGraphql
  >('graphql', {
    buildFields: ['product', 'supplyChannel', 'distributionChannel'],
    addFields: () => ({
      __typename: 'GiftLineItemValue',
    }),
  }),
};

export default transformers;

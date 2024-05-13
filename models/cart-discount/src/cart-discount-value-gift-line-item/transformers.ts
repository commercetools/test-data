import { Reference, TReference } from '@commercetools-test-data/commons';
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
    addFields: ({ fields }) => {
      const supplyChannelRef = fields.supplyChannel
        ? Reference.random()
            .typeId('channel')
            .buildGraphql<TReference<'channel'>>()
        : null;

      const distributionChannelRef = fields.distributionChannel
        ? Reference.random()
            .typeId('channel')
            .buildGraphql<TReference<'channel'>>()
        : null;

      return {
        supplyChannelRef,
        distributionChannelRef,
        __typename: 'GiftLineItemValue',
      };
    },
  }),
};

export default transformers;

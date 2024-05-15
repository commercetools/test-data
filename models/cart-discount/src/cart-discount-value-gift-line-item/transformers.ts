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
    buildFields: ['product'],
    addFields: ({ fields }) => {
      const productRef = Reference.random()
        .id(fields.product.id)
        .typeId('channel')
        .buildGraphql<TReference<'channel'>>();
      const supplyChannelRef = fields.supplyChannel
        ? Reference.random()
            .id(fields.supplyChannel.id)
            .typeId('channel')
            .buildGraphql<TReference<'channel'>>()
        : null;

      const distributionChannelRef = fields.distributionChannel
        ? Reference.random()
            .id(fields.distributionChannel.id)
            .typeId('channel')
            .buildGraphql<TReference<'channel'>>()
        : null;

      return {
        productRef,
        supplyChannelRef,
        distributionChannelRef,
        __typename: 'GiftLineItemValue',
      };
    },
    removeFields: ['distributionChannel', 'supplyChannel', 'product'],
  }),
};

export default transformers;

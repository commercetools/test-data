import { Transformer } from '../../../core';
import { Reference, TReference } from '../../commons';
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
    addFields: ({ fields }) => {
      const productRef = Reference.random()
        .id(fields.product.id)
        .typeId('product')
        .buildGraphql<TReference<'product'>>();
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

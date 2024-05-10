/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import {
  TCartDiscountValueGiftLineItem,
  TCartDiscountValueGiftLineItemGraphql,
} from './types';
import * as CartDiscountValueGiftLineItem from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItem,
      TCartDiscountValueGiftLineItem
    >(
      'default',
      CartDiscountValueGiftLineItem.random(),
      expect.objectContaining({
        type: 'giftLineItem',
        product: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product',
        }),
        variantId: expect.any(Number),
        supplyChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        distributionChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItem,
      TCartDiscountValueGiftLineItem
    >(
      'rest',
      CartDiscountValueGiftLineItem.random(),
      expect.objectContaining({
        type: 'giftLineItem',
        product: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product',
        }),
        variantId: expect.any(Number),
        supplyChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        distributionChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItem,
      TCartDiscountValueGiftLineItemGraphql
    >(
      'graphql',
      CartDiscountValueGiftLineItem.random(),
      expect.objectContaining({
        type: 'giftLineItem',
        product: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product',
        }),
        variantId: expect.any(Number),
        supplyChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        distributionChannelRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        __typename: 'GiftLineItemValue',
      })
    )
  );
});

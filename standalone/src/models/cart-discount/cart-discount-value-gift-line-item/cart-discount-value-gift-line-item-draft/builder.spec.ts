/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../../../core/test-utils';
import {
  TCartDiscountValueGiftLineItemDraft,
  TCartDiscountValueGiftLineItemDraftGraphql,
} from '../types';
import * as CartDiscountValueGiftLineItemDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItemDraft,
      TCartDiscountValueGiftLineItemDraft
    >(
      'default',
      CartDiscountValueGiftLineItemDraft.random(),
      expect.objectContaining({
        type: 'giftLineItem',
        product: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product',
        }),
        variantId: expect.any(Number),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        distributionChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItemDraft,
      TCartDiscountValueGiftLineItemDraft
    >(
      'rest',
      CartDiscountValueGiftLineItemDraft.random(),
      expect.objectContaining({
        type: 'giftLineItem',
        product: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product',
        }),
        variantId: expect.any(Number),
        supplyChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
        distributionChannel: expect.objectContaining({
          id: expect.any(String),
          typeId: 'channel',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TCartDiscountValueGiftLineItemDraft,
      TCartDiscountValueGiftLineItemDraftGraphql
    >(
      'graphql',
      CartDiscountValueGiftLineItemDraft.random(),
      expect.objectContaining({
        giftLineItem: {
          product: expect.objectContaining({
            id: expect.any(String),
            typeId: 'product',
          }),
          variantId: expect.any(Number),
          supplyChannel: expect.objectContaining({
            id: expect.any(String),
            typeId: 'channel',
          }),
          distributionChannel: expect.objectContaining({
            id: expect.any(String),
            typeId: 'channel',
          }),
        },
      })
    )
  );
});

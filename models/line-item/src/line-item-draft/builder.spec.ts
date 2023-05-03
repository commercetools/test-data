/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TLineItemDraft, TLineItemDraftGraphql } from '../types';
import * as LineItemDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TLineItemDraft, TLineItemDraft>(
      'default',
      LineItemDraft.random(),
      expect.objectContaining({
        productId: expect.any(String),
        sku: expect.any(String),
        quantity: expect.any(Number),
        variantId: expect.any(Number),
        supplyChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        distributionChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        externalTaxRate: null,
        externalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
        }),
        externalTotalPrice: null,
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        addedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLineItemDraft, TLineItemDraft>(
      'rest',
      LineItemDraft.random(),
      expect.objectContaining({
        productId: expect.any(String),
        sku: expect.any(String),
        quantity: expect.any(Number),
        variantId: expect.any(Number),
        supplyChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        distributionChannel: expect.objectContaining({
          typeId: 'channel',
        }),
        externalTaxRate: null,
        externalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
        }),
        externalTotalPrice: null,
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        addedAt: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TLineItemDraft, TLineItemDraftGraphql>(
      'graphql',
      LineItemDraft.random(),
      expect.objectContaining({
        productId: expect.any(String),
        sku: expect.any(String),
        quantity: expect.any(Number),
        variantId: expect.any(Number),
        supplyChannel: expect.objectContaining({
          typeId: 'channel',
          __typename: 'Reference',
        }),
        distributionChannel: expect.objectContaining({
          typeId: 'channel',
          __typename: 'Reference',
        }),
        externalTaxRate: null,
        externalPrice: expect.objectContaining({
          centAmount: expect.any(Number),
          __typename: 'BaseMoneyInput',
        }),
        externalTotalPrice: null,
        custom: null,
        inventoryMode: expect.any(String),
        shippingDetails: null,
        addedAt: expect.any(String),
        __typename: 'LineItemDraft',
      })
    )
  );
});

/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomLineItem } from './types';
import * as CustomLineItemDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomLineItem, TCustomLineItem>(
      'default',
      CustomLineItemDraft.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        ]),
        taxedPrice: null,
        totalPrice: null,
        slug: expect.any(String),
        quantity: expect.any(Number),
        state: [],
        taxCategory: null,
        taxRate: null,
        perMethodTaxRate: [],
        discountedPricePerQuantity: [],
        shippingDetails: null,
        priceMode: expect.any(String),
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomLineItem, TCustomLineItem>(
      'rest',
      CustomLineItemDraft.random(),
      expect.objectContaining({
        id: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        money: expect.arrayContaining([
          expect.objectContaining({
            centAmount: expect.any(Number),
            currencyCode: expect.any(String),
          }),
        ]),
        taxedPrice: null,
        totalPrice: null,
        slug: expect.any(String),
        quantity: expect.any(Number),
        state: [],
        taxCategory: null,
        taxRate: null,
        perMethodTaxRate: [],
        discountedPricePerQuantity: [],
        shippingDetails: null,
        priceMode: expect.any(String),
        custom: null,
      })
    )
  );

  //There are no graphql tests at this time
});

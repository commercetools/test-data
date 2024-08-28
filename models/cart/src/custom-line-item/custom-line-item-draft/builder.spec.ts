/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomLineItemDraft } from '../types';
import * as CustomLineItemDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomLineItemDraft, TCustomLineItemDraft>(
      'default',
      CustomLineItemDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        quantity: expect.any(Number),
        money: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),

        slug: expect.any(String),
        taxCategory: null,
        externalTaxRate: null,
        custom: null,
        priceMode: expect.any(String),
        shippingDetails: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomLineItemDraft, TCustomLineItemDraft>(
      'rest',
      CustomLineItemDraft.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        quantity: expect.any(Number),
        money: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),

        slug: expect.any(String),
        taxCategory: null,
        externalTaxRate: null,
        custom: null,
        priceMode: expect.any(String),
        shippingDetails: null,
      })
    )
  );

  //There are no graphql tests at this time
});

/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { CentPrecisionMoney } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TaxPortion } from '../tax-portion';
import {
  TTaxedItemPrice,
  TTaxedItemPriceGraphql,
  TTaxedItemPriceRest,
} from './types';
import { TaxedItemPrice } from '.';

describe('TaxedItemPrice builder spec', () => {
  const modelBuilder = TaxedItemPrice.random()
    .taxPortions([TaxPortion.random()])
    .totalTax(
      CentPrecisionMoney.random()
        .centAmount(12345)
        .currencyCode('EUR')
        .fractionDigits(1)
    );
  const expectGenericCentPrecisionMoney = expect.objectContaining({
    centAmount: expect.any(Number),
    currencyCode: expect.any(String),
    fractionDigits: expect.any(Number),
  });

  it(
    ...createBuilderSpec<TTaxedItemPrice, TTaxedItemPriceRest>(
      'rest',
      modelBuilder,
      expect.objectContaining({
        totalNet: expectGenericCentPrecisionMoney,
        totalGross: expectGenericCentPrecisionMoney,
        taxPortions: expect.arrayContaining([
          expect.objectContaining({
            rate: expect.any(Number),
            amount: expectGenericCentPrecisionMoney,
          }),
        ]),
        totalTax: expect.objectContaining({
          centAmount: 12345,
          currencyCode: 'EUR',
          fractionDigits: 1,
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TTaxedItemPrice, TTaxedItemPriceGraphql>(
      'graphql',
      modelBuilder,
      expect.objectContaining({
        totalNet: expectGenericCentPrecisionMoney,
        totalGross: expectGenericCentPrecisionMoney,
        taxPortions: expect.arrayContaining([
          expect.objectContaining({
            rate: expect.any(Number),
            amount: expectGenericCentPrecisionMoney,
            __typename: 'TaxPortion',
          }),
        ]),
        totalTax: expect.objectContaining({
          centAmount: 12345,
          currencyCode: 'EUR',
          fractionDigits: 1,
          __typename: 'Money',
        }),
        __typename: 'TaxedItemPrice',
      })
    )
  );
});

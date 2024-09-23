/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import {
  HighPrecisionMoney,
  Reference,
} from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { DiscountedProductPriceDraft } from '..';
import {
  TDiscountedProductPriceDraft,
  TDiscountedProductPriceDraftGraphql,
} from '../types';

describe('builder', () => {
  it(
    ...createBuilderSpec<
      TDiscountedProductPriceDraft,
      TDiscountedProductPriceDraft
    >(
      'rest',
      DiscountedProductPriceDraft.random()
        .value(HighPrecisionMoney.random().currencyCode('USD'))
        .discount(Reference.presets.productDiscountReference().id('pd-123')),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'USD',
        }),
        discount: expect.objectContaining({
          id: 'pd-123',
          typeId: 'product-discount',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<
      TDiscountedProductPriceDraft,
      TDiscountedProductPriceDraftGraphql
    >(
      'graphql',
      DiscountedProductPriceDraft.random()
        .value(HighPrecisionMoney.random().currencyCode('USD'))
        .discount(Reference.presets.productDiscountReference().id('pd-123')),
      expect.objectContaining({
        value: expect.objectContaining({
          currencyCode: 'USD',
        }),
        discount: expect.objectContaining({
          id: 'pd-123',
          __typename: 'ProductDiscount',
        }),
        __typename: 'DiscountedProductPriceDraft',
      })
    )
  );
});

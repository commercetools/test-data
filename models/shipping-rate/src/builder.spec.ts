/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TShippingRate, TShippingRateGraphql } from './types';
import * as ShippingRate from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShippingRate, TShippingRate>(
      'default',
      ShippingRate.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TShippingRate, TShippingRate>(
      'rest',
      ShippingRate.random(),
      expect.objectContaining({})
    )
  );

  it(
    ...createBuilderSpec<TShippingRate, TShippingRateGraphql>(
      'graphql',
      ShippingRate.random(),
      expect.objectContaining({
        __typename: 'ShippingRate',
      })
    )
  );
});

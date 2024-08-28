/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TShippingMethod, TShippingMethodGraphql } from './types';
import * as ShippingMethod from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TShippingMethod, TShippingMethod>(
      'default',
      ShippingMethod.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.objectContaining({
          en: expect.any(String),
        }),
        localizedDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        taxCategory: expect.objectContaining({
          id: expect.any(String),
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: expect.any(String),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingMethod, TShippingMethod>(
      'rest',
      ShippingMethod.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.objectContaining({
          en: expect.any(String),
        }),
        localizedDescription: expect.objectContaining({
          en: expect.any(String),
        }),
        taxCategory: expect.objectContaining({
          id: expect.any(String),
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: '1=1',
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TShippingMethod, TShippingMethodGraphql>(
      'graphql',
      ShippingMethod.random(),
      expect.objectContaining({
        __typename: 'ShippingMethod',
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
        localizedName: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        localizedDescription: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        taxCategory: expect.objectContaining({
          id: expect.any(String),
        }),
        taxCategoryRef: expect.objectContaining({
          typeId: 'tax-category',
          __typename: 'Reference',
        }),
        zoneRates: expect.any(Array),
        isDefault: expect.any(Boolean),
        predicate: '1=1',
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});

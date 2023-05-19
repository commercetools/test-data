/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCartDiscount, TCartDiscountGraphql } from './types';
import * as CartDiscount from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCartDiscount, TCartDiscount>(
      'default',
      CartDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        value: expect.objectContaining({
          type: expect.any(String),
        }),
        target: null,
        cartPredicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        references: expect.arrayContaining([]),
        stackingMode: expect.any(String),
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
    ...createBuilderSpec<TCartDiscount, TCartDiscount>(
      'rest',
      CartDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        value: expect.objectContaining({
          type: expect.any(String),
        }),
        cartPredicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        references: expect.arrayContaining([]),
        stackingMode: expect.any(String),
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
    ...createBuilderSpec<TCartDiscount, TCartDiscountGraphql>(
      'graphql',
      CartDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        value: expect.any(Object),
        cartPredicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        requiresDiscountCode: expect.any(Boolean),
        references: expect.arrayContaining([]),
        stackingMode: expect.any(String),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
          __typename: 'Initiator',
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
          __typename: 'Initiator',
        }),
        __typename: 'CartDiscount',
      })
    )
  );
});

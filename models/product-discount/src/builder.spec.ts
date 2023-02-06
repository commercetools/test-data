/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TProductDiscount, TProductDiscountGraphql } from './types';
import * as ProductDiscount from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TProductDiscount, TProductDiscount>(
      'default',
      ProductDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
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
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
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
    ...createBuilderSpec<TProductDiscount, TProductDiscount>(
      'rest',
      ProductDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
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
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
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
    ...createBuilderSpec<TProductDiscount, TProductDiscountGraphql>(
      'graphql',
      ProductDiscount.random(),
      expect.objectContaining({
        id: expect.any(String),
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
        value: expect.objectContaining({
          type: expect.any(String),
        }),
        predicate: '1=1',
        sortOrder: expect.any(String),
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
          __typename: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
          __typename: expect.any(String),
        }),
        __typename: 'ProductDiscount',
      })
    )
  );
});

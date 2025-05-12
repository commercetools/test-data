/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '../../core/test-utils';
import { TDiscountCode, TDiscountCodeGraphql } from './types';
import * as DiscountCode from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDiscountCode, TDiscountCode>(
      'default',
      DiscountCode.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        applicationVersion: expect.any(Number),
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
    ...createBuilderSpec<TDiscountCode, TDiscountCode>(
      'rest',
      DiscountCode.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        applicationVersion: expect.any(Number),
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
    ...createBuilderSpec<TDiscountCode, TDiscountCodeGraphql>(
      'graphql',
      DiscountCode.random(),
      expect.objectContaining({
        id: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
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
        code: expect.any(String),
        cartDiscounts: expect.arrayContaining([]),
        cartPredicate: '1=1',
        isActive: expect.any(Boolean),
        references: expect.arrayContaining([]),
        maxApplications: expect.any(Number),
        maxApplicationsPerCustomer: expect.any(Number),
        groups: expect.arrayContaining([]),
        validFrom: expect.any(String),
        validUntil: expect.any(String),
        applicationVersion: expect.any(Number),
        applicationCount: expect.any(Number),
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
        __typename: 'DiscountCode',
      })
    )
  );
});

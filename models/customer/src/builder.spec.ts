/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { TCustomer, TCustomerGraphql } from './types';
import * as Customer from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomer, TCustomer>(
      'default',
      Customer.random(),
      expect.objectContaining({
        id: expect.any(String),
        customerNumber: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        email: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        dateOfBirth: expect.any(Date),
        companyName: expect.any(String),
        vatId: expect.any(String),
        addresses: null,
        defaultShippingAddressId: null,
        shippingAddressIds: null,
        defaultBillingAddressId: null,
        billingAddressIds: null,
        isEmailVerified: expect.any(Boolean),
        externalId: expect.any(String),
        customerGroup: null,
        custom: null,
        locale: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomer, TCustomer>(
      'rest',
      Customer.random(),
      expect.objectContaining({
        id: expect.any(String),
        customerNumber: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        email: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        dateOfBirth: expect.any(Date),
        companyName: expect.any(String),
        vatId: expect.any(String),
        addresses: null,
        defaultShippingAddressId: null,
        shippingAddressIds: null,
        defaultBillingAddressId: null,
        billingAddressIds: null,
        isEmailVerified: expect.any(Boolean),
        externalId: expect.any(String),
        customerGroup: null,
        custom: null,
        locale: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomer, TCustomerGraphql>(
      'graphql',
      Customer.random(),
      expect.objectContaining({
        __typename: 'Customer',
        id: expect.any(String),
        customerNumber: expect.any(String),
        key: expect.any(String),
        version: expect.any(Number),
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
        email: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        dateOfBirth: expect.any(Date),
        companyName: expect.any(String),
        vatId: expect.any(String),
        addresses: null,
        defaultShippingAddressId: null,
        shippingAddressIds: null,
        defaultBillingAddressId: null,
        billingAddressIds: null,
        isEmailVerified: expect.any(Boolean),
        externalId: expect.any(String),
        customerGroup: null,
        custom: null,
        locale: expect.any(String),
      })
    )
  );
});

/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomer, TCustomerGraphql } from './types';
import * as Customer from './index';

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
        dateOfBirth: null,
        companyName: expect.any(String),
        vatId: expect.any(String),
        addresses: expect.arrayContaining([
          expect.objectContaining({
            country: expect.any(String),
          }),
        ]),
        defaultShippingAddressId: null,
        shippingAddressIds: null,
        defaultBillingAddressId: null,
        billingAddressIds: null,
        defaultShippingAddress: null,
        shippingAddresses: null,
        defaultBillingAddress: null,
        billingAddresses: null,
        isEmailVerified: expect.any(Boolean),
        externalId: expect.any(String),
        customerGroup: null,
        custom: null,
        locale: expect.any(String),
        authenticationMode: expect.any(String),
      })
    )
  );

  describe('rest transformation', () => {
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
          dateOfBirth: null,
          companyName: expect.any(String),
          vatId: expect.any(String),
          addresses: expect.arrayContaining([
            expect.objectContaining({
              country: expect.any(String),
            }),
          ]),
          defaultShippingAddressId: null,
          shippingAddressIds: null,
          defaultBillingAddressId: null,
          billingAddressIds: null,
          isEmailVerified: expect.any(Boolean),
          externalId: expect.any(String),
          customerGroup: null,
          custom: null,
          locale: expect.any(String),
          authenticationMode: expect.any(String),
        })
      )
    );

    it.each([
      'defaultShippingAddress',
      'shippingAddresses',
      'defaultBillingAddress',
      'billingAddresses',
    ])('should not have graphql only property: %j', (property) => {
      const defaultModel = Customer.random().buildRest<TCustomer>();
      expect(defaultModel).not.toHaveProperty(property);
    });
  });

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
        dateOfBirth: null,
        companyName: expect.any(String),
        vatId: expect.any(String),
        addresses: expect.arrayContaining([
          expect.objectContaining({
            country: expect.any(String),
          }),
        ]),
        defaultShippingAddressId: null,
        shippingAddressIds: null,
        defaultBillingAddressId: null,
        billingAddressIds: null,
        defaultShippingAddress: null,
        shippingAddresses: null,
        defaultBillingAddress: null,
        billingAddresses: null,
        isEmailVerified: expect.any(Boolean),
        externalId: expect.any(String),
        customerGroup: null,
        custom: null,
        locale: expect.any(String),
        authenticationMode: expect.any(String),
      })
    )
  );
});

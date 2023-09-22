/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCustomerDraft, TCustomerDraftGraphql } from '../types';
import * as CustomerDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomerDraft, TCustomerDraft>(
      'default',
      CustomerDraft.random(),
      expect.objectContaining({
        customerNumber: expect.any(String),
        email: expect.any(String),
        key: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        anonymousCart: null,
        anonymousId: null,
        externalId: expect.any(String),
        dateOfBirth: null,
        companyName: expect.any(String),
        vatId: expect.any(String),
        isEmailVerified: expect.any(Boolean),
        customerGroup: null,
        addresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        defaultBillingAddress: null,
        billingAddresses: null,
        defaultShippingAddress: null,
        shippingAddresses: null,
        custom: null,
        locale: expect.any(String),
        authenticationMode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomerDraft, TCustomerDraft>(
      'rest',
      CustomerDraft.random(),
      expect.objectContaining({
        customerNumber: expect.any(String),
        email: expect.any(String),
        key: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        anonymousCart: null,
        anonymousId: null,
        externalId: expect.any(String),
        dateOfBirth: null,
        companyName: expect.any(String),
        vatId: expect.any(String),
        isEmailVerified: expect.any(Boolean),
        customerGroup: null,
        addresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        defaultBillingAddress: null,
        billingAddresses: null,
        defaultShippingAddress: null,
        shippingAddresses: null,
        custom: null,
        locale: expect.any(String),
        authenticationMode: expect.any(String),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomerDraft, TCustomerDraftGraphql>(
      'graphql',
      CustomerDraft.random(),
      expect.objectContaining({
        customerNumber: expect.any(String),
        email: expect.any(String),
        key: expect.any(String),
        password: expect.any(String),
        stores: null,
        firstName: expect.any(String),
        lastName: expect.any(String),
        middleName: expect.any(String),
        title: expect.any(String),
        salutation: expect.any(String),
        anonymousCart: null,
        anonymousId: null,
        externalId: expect.any(String),
        dateOfBirth: null,
        companyName: expect.any(String),
        vatId: expect.any(String),
        isEmailVerified: expect.any(Boolean),
        customerGroup: null,
        addresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        defaultBillingAddress: null,
        billingAddresses: null,
        defaultShippingAddress: null,
        shippingAddresses: null,
        custom: null,
        locale: expect.any(String),
        authenticationMode: expect.any(String),
      })
    )
  );
});

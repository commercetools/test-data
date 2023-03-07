import type { TCustomerDraft } from '../../types';
import empty from './empty';

it('should set all fields except `email` to undefined', () => {
  const emptyCustomerDraft = empty().build<TCustomerDraft>();
  expect(emptyCustomerDraft).toEqual({
    customerNumber: undefined,
    email: expect.any(String),
    key: undefined,
    password: undefined,
    stores: undefined,
    firstName: undefined,
    lastName: undefined,
    middleName: undefined,
    title: undefined,
    salutation: undefined,
    anonymousCart: undefined,
    anonymousId: undefined,
    externalId: undefined,
    dateOfBirth: undefined,
    companyName: undefined,
    vatId: undefined,
    isEmailVerified: undefined,
    customerGroup: undefined,
    addresses: undefined,
    defaultBillingAddress: undefined,
    billingAddresses: undefined,
    defaultShippingAddress: undefined,
    shippingAddresses: undefined,
    custom: undefined,
    locale: undefined,
  });
});

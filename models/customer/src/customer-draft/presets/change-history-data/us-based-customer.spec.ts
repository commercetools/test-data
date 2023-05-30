import { TCustomerDraft } from '../../../types';
import usBasedCustomer from './us-based-customer';

describe('us based customer', () => {
  it('should return us based addresses', () => {
    const customer = usBasedCustomer().build<TCustomerDraft>();

    expect(customer).toEqual(
      expect.objectContaining({
        dateOfBirth: undefined,
        locale: expect.stringContaining('en-US'),
        defaultBillingAddress: 0,
        defaultShippingAddress: 0,
        addresses: expect.arrayContaining([
          expect.objectContaining({
            country: expect.stringContaining('US'),
          }),
        ]),
      })
    );
  });
});

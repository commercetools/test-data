import type { TCustomerDraft } from '../../../types';
import usBasedCustomerNoState from './us-based-with-no-state';

describe('A US-based customer with no defined state', () => {
  it('should return country with value of US and no state', () => {
    const customer = usBasedCustomerNoState().build<TCustomerDraft>();

    expect(customer).toEqual(
      expect.objectContaining({
        locale: expect.stringContaining('en-US'),
        defaultBillingAddress: 0,
        defaultShippingAddress: 0,
        addresses: expect.arrayContaining([
          expect.objectContaining({
            country: expect.stringContaining('US'),
            state: null,
          }),
        ]),
        authenticationMode: 'Password',
      })
    );
  });
});

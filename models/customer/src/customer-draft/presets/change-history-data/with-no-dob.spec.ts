import type { TCustomerDraft } from '../../../types';
import withNoDob from './with-no-dob';

describe('A customer with no date of birth', () => {
  it('should return customer with date of birth undefined and authentication mode set to `Password`', () => {
    const customer = withNoDob().build<TCustomerDraft>();

    expect(customer).toEqual(
      expect.objectContaining({
        dateOfBirth: undefined,
        authenticationMode: 'Password',
      })
    );
  });
});

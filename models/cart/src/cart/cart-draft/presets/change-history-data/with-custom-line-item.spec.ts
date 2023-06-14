import { TCartDraft } from '../../../types';
import withCustomLineItem from './with-custom-line-item';

describe('Cart with CustomLineItem preset', () => {
  it('should return a CustomLineItem', () => {
    const cartWithCustomLineItem = withCustomLineItem().build<TCartDraft>();

    expect(cartWithCustomLineItem).toEqual(
      expect.objectContaining({
        customLineItems: expect.arrayContaining([
          expect.objectContaining({
            money: expect.objectContaining({
              currencyCode: 'USD',
            }),
          }),
        ]),
        country: 'US',
        locale: 'en-US',
        currency: 'USD',
        shippingAddress: expect.objectContaining({
          country: 'US',
          state: null,
        }),
      })
    );
  });
});

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
              currencyCode: expect.stringContaining('US'),
            }),
          }),
        ]),
        country: expect.stringContaining('US'),
        locale: expect.stringContaining('en-US'),
        currency: expect.stringContaining('USD'),
        shippingAddress: expect.objectContaining({
          country: expect.stringContaining('US'),
          state: null,
        }),
      })
    );
  });
});

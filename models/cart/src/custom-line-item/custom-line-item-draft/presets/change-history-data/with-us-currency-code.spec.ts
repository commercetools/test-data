import { TCustomLineItemDraft } from '../../../types';
import customLineItemWithUsCurrencyCode from './with-us-currency-code';

describe('Custom line item with a Money `US` currencyCode', () => {
  it('should return a custom line item with the money currencyCode set to `US`', () => {
    const usCurrencyCode =
      customLineItemWithUsCurrencyCode().build<TCustomLineItemDraft>();

    expect(usCurrencyCode).toEqual(
      expect.objectContaining({
        money: expect.objectContaining({
          currencyCode: expect.stringContaining('US'),
        }),
      })
    );
  });
});

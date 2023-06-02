import { TMoney } from '../../types';
import withUsCurrencyCode from './with-us-currency-code';

describe('Money with a defined `US` currencyCode', () => {
  it('should return a currencyCode set to `US`', () => {
    const usCurrencyCode = withUsCurrencyCode().build<TMoney>();

    expect(usCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: expect.stringContaining('US'),
      })
    );
  });
});

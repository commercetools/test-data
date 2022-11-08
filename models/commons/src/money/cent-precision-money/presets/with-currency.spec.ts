import withCurrency from './with-currency';

describe('withCurrency preset', () => {
  it('should build by default', () => {
    const built = withCurrency().build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: expect.any(Number),
      fractionDigits: 2,
    });
  });

  it('should build with Japanese Yen', () => {
    const built = withCurrency('JPY').build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'JPY',
      centAmount: expect.any(Number),
      fractionDigits: 0,
    });
  });

  it('should build with a random currency', () => {
    const built = withCurrency('XYZ').build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'XYZ',
      centAmount: expect.any(Number),
      fractionDigits: 2,
    });
  });
});

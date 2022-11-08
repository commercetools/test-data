import withAmount from './with-amount';

describe('withAmount preset', () => {
  it('should build by default', () => {
    const built = withAmount().build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 10,
      fractionDigits: 2,
    });
  });

  it('should build with Japanese Yen', () => {
    const built = withAmount(1000, 'JPY').build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'JPY',
      centAmount: 1000,
      fractionDigits: 0,
    });
  });

  it('should build with a random currency', () => {
    const built = withAmount(1234, 'XYZ').build();
    expect(built).toEqual({
      type: 'centPrecision',
      currencyCode: 'XYZ',
      centAmount: 1234,
      fractionDigits: 2,
    });
  });
});

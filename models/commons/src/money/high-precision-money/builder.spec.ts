import * as HighPercisionMoney from '.';
import { fractionDigits } from '../constants';
import { THighPrecisionMoney } from '../types';

describe('builder', () => {
  it('should build default', () => {
    const built: THighPrecisionMoney = HighPercisionMoney.random().build();
    expect(built).toEqual(
      expect.objectContaining({
        centAmount: null,
        type: 'highPrecision',
        preciseAmount: expect.any(Number),
      })
    );
    expect(Object.keys(fractionDigits)).toContain(built.currencyCode);
    expect(built.fractionDigits).toBeGreaterThan(
      fractionDigits[built.currencyCode].fractionDigits
    );
    expect(built.fractionDigits).toBeLessThanOrEqual(20);
  });
});

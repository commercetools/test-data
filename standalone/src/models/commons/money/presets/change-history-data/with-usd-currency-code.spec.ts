import { TMoneyRest, TMoneyGraphql } from '../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-usd-currency-code';

describe('Money with a defined `USD` currencyCode', () => {
  it('should return a currencyCode set to `USD` for REST', () => {
    const usdCurrencyCode = restPreset().build<TMoneyRest>();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      })
    );
  });

  it('should return a currencyCode set to `USD` for GraphQL', () => {
    const usdCurrencyCode = graphqlPreset().build<TMoneyGraphql>();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
        __typename: 'Money',
        type: 'centPrecision',
        fractionDigits: 2,
      })
    );
  });
});

describe('Money with a defined `USD` currencyCode compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const usdCurrencyCode = compatPreset().build();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      })
    );
  });

  it('builds a REST model', () => {
    const usdCurrencyCode = compatPreset().buildRest();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      })
    );
  });

  it('builds a GraphQL model', () => {
    const usdCurrencyCode = compatPreset().buildGraphql<TMoneyGraphql>();

    expect(usdCurrencyCode).toEqual(
      expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
        __typename: 'Money',
        type: 'centPrecision',
        fractionDigits: 2,
      })
    );
  });
});

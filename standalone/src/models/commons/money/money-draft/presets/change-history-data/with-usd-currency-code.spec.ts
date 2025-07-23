import { TMoneyDraftRest, TMoneyDraftGraphql } from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-usd-currency-code';

function validateModel(model: TMoneyDraftRest | TMoneyDraftGraphql) {
  expect(model).toEqual(
    expect.objectContaining({
      centAmount: expect.any(Number),
      currencyCode: 'USD',
    })
  );
}

describe('Money with a defined `USD` currencyCode', () => {
  it('should return a currencyCode set to `USD` for REST', () => {
    const usdCurrencyCode = restPreset().build<TMoneyDraftRest>();

    validateModel(usdCurrencyCode);
  });

  it('should return a currencyCode set to `USD` for GraphQL', () => {
    const usdCurrencyCode = graphqlPreset().build<TMoneyDraftGraphql>();

    validateModel(usdCurrencyCode);
  });
});

describe('Money with a defined `USD` currencyCode compatibility presets', () => {
  it('builds a default (REST) model', () => {
    const usdCurrencyCode = compatPreset().build();

    validateModel(usdCurrencyCode);
  });

  it('builds a REST model', () => {
    const usdCurrencyCode = compatPreset().buildRest();

    validateModel(usdCurrencyCode);
  });

  it('builds a GraphQL model', () => {
    const usdCurrencyCode = compatPreset().buildGraphql<TMoneyDraftGraphql>();

    validateModel(usdCurrencyCode);
  });
});

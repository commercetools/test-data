import {
  TCustomLineItemDraftRest,
  TCustomLineItemDraftGraphql,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-usd-currency-code';

const validateMoneyField = (
  model: TCustomLineItemDraftRest | TCustomLineItemDraftGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      money: expect.objectContaining({ currencyCode: 'USD' }),
    })
  );
};

describe('Custom line item with a MoneyDraft `USD` currencyCode', () => {
  it('[REST] should return a custom line item with the money currencyCode set to `USD`', () => {
    validateMoneyField(restPreset().build());
  });

  it('[GraphQL] should return a custom line item with the money currencyCode set to `USD`', () => {
    validateMoneyField(graphqlPreset().build());
  });

  it('[Compat - DEFAULT] should return a custom line item with the money currencyCode set to `USD`', () => {
    validateMoneyField(compatPreset().build());
  });

  it('[Compat - REST] should return a custom line item with the money currencyCode set to `USD`', () => {
    validateMoneyField(compatPreset().buildRest());
  });

  it('[Compat - GraphQL] should return a custom line item with the money currencyCode set to `USD`', () => {
    validateMoneyField(compatPreset().buildGraphql());
  });
});

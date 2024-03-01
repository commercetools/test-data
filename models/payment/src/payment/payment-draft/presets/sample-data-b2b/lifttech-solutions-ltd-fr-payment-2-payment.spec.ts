import type { TPaymentDraft } from '../../../types';
import lifttechSolutionsLtdFrPayment2Payment from './lifttech-solutions-ltd-fr-payment-2-payment';

describe(`with lifttechSolutionsLtdFrPayment2Payment preset`, () => {
  it(`should return a lifttechSolutionsLtdFrPayment2Payment preset`, () => {
    const lifttechSolutionsLtdFrPayment2PaymentPreset =
      lifttechSolutionsLtdFrPayment2Payment().build<TPaymentDraft>();
    expect(lifttechSolutionsLtdFrPayment2PaymentPreset).toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 24300000,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "camille-lefevre",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "lifttech-solutions-ltd-fr-cart-2",
        "paymentMethodInfo": {
          "method": "bank transfer",
          "name": {
            "de": undefined,
            "en": undefined,
            "fr": undefined,
          },
          "paymentInterface": undefined,
        },
        "paymentStatus": {
          "interfaceCode": undefined,
          "interfaceText": "undefined",
          "state": undefined,
        },
        "transactions": undefined,
      }
    `);
  });

  it(`should return a lifttechSolutionsLtdFrPayment2Payment preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrPayment2PaymentPresetGraphql =
      lifttechSolutionsLtdFrPayment2Payment().buildGraphql<TPaymentDraft>();
    expect(lifttechSolutionsLtdFrPayment2PaymentPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 24300000,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "camille-lefevre",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "lifttech-solutions-ltd-fr-cart-2",
        "paymentMethodInfo": {
          "method": "bank transfer",
          "name": [],
          "paymentInterface": undefined,
        },
        "paymentStatus": {
          "interfaceCode": undefined,
          "interfaceText": "undefined",
          "state": undefined,
        },
        "transactions": undefined,
      }
    `);
  });
});

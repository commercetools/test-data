import type { TPaymentDraft } from '../../../types';
import lifttechSolutionsLtdFrFromQuotePayment1Payment from './lifttech-solutions-ltd-fr-from-quote-payment-1-payment';

describe(`with lifttechSolutionsLtdFrFromQuotePayment1Payment preset`, () => {
  it(`should return a lifttechSolutionsLtdFrFromQuotePayment1Payment preset`, () => {
    const lifttechSolutionsLtdFrFromQuotePayment1PaymentPreset =
      lifttechSolutionsLtdFrFromQuotePayment1Payment().build<TPaymentDraft>();
    expect(lifttechSolutionsLtdFrFromQuotePayment1PaymentPreset)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 22060350,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "ava-brown",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1",
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

  it(`should return a lifttechSolutionsLtdFrFromQuotePayment1Payment preset when built for graphql`, () => {
    const lifttechSolutionsLtdFrFromQuotePayment1PaymentPresetGraphql =
      lifttechSolutionsLtdFrFromQuotePayment1Payment().buildGraphql<TPaymentDraft>();
    expect(lifttechSolutionsLtdFrFromQuotePayment1PaymentPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 22060350,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "ava-brown",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "lifttech-solutions-ltd-fr-quote-1",
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

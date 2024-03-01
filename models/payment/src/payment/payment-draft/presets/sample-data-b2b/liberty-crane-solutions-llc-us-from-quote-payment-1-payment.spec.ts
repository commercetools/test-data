import type { TPaymentDraft } from '../../../types';
import libertyCraneSolutionsLlcUsFromQuotePayment1Payment from './liberty-crane-solutions-llc-us-from-quote-payment-1-payment';

describe(`with libertyCraneSolutionsLlcUsFromQuotePayment1Payment preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsFromQuotePayment1Payment preset`, () => {
    const libertyCraneSolutionsLlcUsFromQuotePayment1PaymentPreset =
      libertyCraneSolutionsLlcUsFromQuotePayment1Payment().build<TPaymentDraft>();
    expect(libertyCraneSolutionsLlcUsFromQuotePayment1PaymentPreset)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 29160000,
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
        "key": "liberty-crane-solutions-llc-us-quote-1",
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

  it(`should return a libertyCraneSolutionsLlcUsFromQuotePayment1Payment preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsFromQuotePayment1PaymentPresetGraphql =
      libertyCraneSolutionsLlcUsFromQuotePayment1Payment().buildGraphql<TPaymentDraft>();
    expect(libertyCraneSolutionsLlcUsFromQuotePayment1PaymentPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 29160000,
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
        "key": "liberty-crane-solutions-llc-us-quote-1",
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

import type { TPaymentDraft } from '../../../types';
import libertyCraneSolutionsLlcUsPayment2Payment from './liberty-crane-solutions-llc-us-payment-2-payment';

describe(`with libertyCraneSolutionsLlcUsPayment2Payment preset`, () => {
  it(`should return a libertyCraneSolutionsLlcUsPayment2Payment preset`, () => {
    const libertyCraneSolutionsLlcUsPayment2PaymentPreset =
      libertyCraneSolutionsLlcUsPayment2Payment().build<TPaymentDraft>();
    expect(libertyCraneSolutionsLlcUsPayment2PaymentPreset)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 13198500,
          "currencyCode": "USD",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "ava-brown",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-2",
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

  it(`should return a libertyCraneSolutionsLlcUsPayment2Payment preset when built for graphql`, () => {
    const libertyCraneSolutionsLlcUsPayment2PaymentPresetGraphql =
      libertyCraneSolutionsLlcUsPayment2Payment().buildGraphql<TPaymentDraft>();
    expect(libertyCraneSolutionsLlcUsPayment2PaymentPresetGraphql)
      .toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 13198500,
          "currencyCode": "USD",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "ava-brown",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "liberty-crane-solutions-llc-us-cart-2",
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

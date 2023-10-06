import type { TPaymentDraft, TPaymentDraftGraphql } from '../../../types';
import sebastianMuellerPayment from './sebastian-mueller-payment';

describe(`with sebastianMuellerPayment preset`, () => {
  it(`should return a paymentDraft when built for default`, () => {
    const sebastianMuellerPaymentDraft =
      sebastianMuellerPayment().build<TPaymentDraft>();
    expect(sebastianMuellerPaymentDraft).toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 395890,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "sebastian-mueller",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "sebastian-mueller-01",
        "paymentMethodInfo": {
          "method": "Credit Card",
          "name": {
            "de": undefined,
            "en": undefined,
            "en-GB": "Credit Card",
            "en-US": "Credit Card",
            "fr": undefined,
          },
          "paymentInterface": undefined,
        },
        "paymentStatus": {
          "interfaceCode": undefined,
          "interfaceText": "Paid",
          "state": undefined,
        },
        "transactions": [
          {
            "amount": {
              "centAmount": 395890,
              "currencyCode": "EUR",
            },
            "custom": undefined,
            "interactionId": "741852300",
            "state": "Pending",
            "timestamp": undefined,
            "type": "Authorization",
          },
          {
            "amount": {
              "centAmount": 395890,
              "currencyCode": "EUR",
            },
            "custom": undefined,
            "interactionId": "323044987",
            "state": "Success",
            "timestamp": undefined,
            "type": "Charge",
          },
        ],
      }
    `);
  });

  it(`should return a paymentDraft when built for Graphql`, () => {
    const sebastianMuellerPaymentDraftGraphql =
      sebastianMuellerPayment().build<TPaymentDraftGraphql>();
    expect(sebastianMuellerPaymentDraftGraphql).toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 395890,
          "currencyCode": "EUR",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "sebastian-mueller",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "sebastian-mueller-01",
        "paymentMethodInfo": {
          "method": "Credit Card",
          "name": {
            "de": undefined,
            "en": undefined,
            "en-GB": "Credit Card",
            "en-US": "Credit Card",
            "fr": undefined,
          },
          "paymentInterface": undefined,
        },
        "paymentStatus": {
          "interfaceCode": undefined,
          "interfaceText": "Paid",
          "state": undefined,
        },
        "transactions": [
          {
            "amount": {
              "centAmount": 395890,
              "currencyCode": "EUR",
            },
            "custom": undefined,
            "interactionId": "741852300",
            "state": "Pending",
            "timestamp": undefined,
            "type": "Authorization",
          },
          {
            "amount": {
              "centAmount": 395890,
              "currencyCode": "EUR",
            },
            "custom": undefined,
            "interactionId": "323044987",
            "state": "Success",
            "timestamp": undefined,
            "type": "Charge",
          },
        ],
      }
    `);
  });
});

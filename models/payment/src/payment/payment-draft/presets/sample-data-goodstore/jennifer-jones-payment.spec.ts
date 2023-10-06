import type { TPaymentDraft, TPaymentDraftGraphql } from '../../../types';
import jenniferJonesPayment from './jennifer-jones-payment';

describe(`with jenniferJonesPayment preset`, () => {
  it(`should return a paymentDraf twhen built for default`, () => {
    const jenniferJonesPaymentDraft =
      jenniferJonesPayment().build<TPaymentDraft>();
    expect(jenniferJonesPaymentDraft).toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 485759,
          "currencyCode": "GBP",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "jennifer-jones",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "jennifer-jones-01",
        "paymentMethodInfo": {
          "method": "Debit Card",
          "name": {
            "de": undefined,
            "en": undefined,
            "en-GB": "Debit Card",
            "en-US": "Debit Card",
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
              "centAmount": 485759,
              "currencyCode": "GBP",
            },
            "custom": undefined,
            "interactionId": "741852963",
            "state": "Pending",
            "timestamp": undefined,
            "type": "Authorization",
          },
          {
            "amount": {
              "centAmount": 485759,
              "currencyCode": "GBP",
            },
            "custom": undefined,
            "interactionId": "321654987",
            "state": "Success",
            "timestamp": undefined,
            "type": "Charge",
          },
        ],
      }
    `);
  });

  it(`should return a paymentDraft when built for Graphql`, () => {
    const jenniferJonesPaymentDraftGraphql =
      jenniferJonesPayment().build<TPaymentDraftGraphql>();
    expect(jenniferJonesPaymentDraftGraphql).toMatchInlineSnapshot(`
      {
        "amountPlanned": {
          "centAmount": 485759,
          "currencyCode": "GBP",
        },
        "anonymousId": undefined,
        "custom": undefined,
        "customer": {
          "key": "jennifer-jones",
          "typeId": "customer",
        },
        "interfaceId": undefined,
        "interfaceInteractions": undefined,
        "key": "jennifer-jones-01",
        "paymentMethodInfo": {
          "method": "Debit Card",
          "name": {
            "de": undefined,
            "en": undefined,
            "en-GB": "Debit Card",
            "en-US": "Debit Card",
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
              "centAmount": 485759,
              "currencyCode": "GBP",
            },
            "custom": undefined,
            "interactionId": "741852963",
            "state": "Pending",
            "timestamp": undefined,
            "type": "Authorization",
          },
          {
            "amount": {
              "centAmount": 485759,
              "currencyCode": "GBP",
            },
            "custom": undefined,
            "interactionId": "321654987",
            "state": "Success",
            "timestamp": undefined,
            "type": "Charge",
          },
        ],
      }
    `);
  });
});

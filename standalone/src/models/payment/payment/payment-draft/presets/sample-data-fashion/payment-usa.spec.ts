import type { TPaymentDraft } from '../../../types';
import paymentUSA from './payment-usa';

it(`should set all fields to specified values`, () => {
  const paymentUSADraft = paymentUSA().build<TPaymentDraft>();
  expect(paymentUSADraft.key).toMatchInlineSnapshot(`"sample-usa-01-cart"`);
  expect(paymentUSADraft.anonymousId).toMatchInlineSnapshot(`undefined`);
  expect(paymentUSADraft.interfaceId).toMatchInlineSnapshot(`undefined`);
  expect(paymentUSADraft.customer).toMatchInlineSnapshot(`
    {
      "key": "12345",
      "typeId": "customer",
    }
  `);
  expect(paymentUSADraft.paymentMethodInfo).toMatchInlineSnapshot(`
    {
      "method": "Credit Card",
      "name": {
        "de": undefined,
        "en": "Credit Card",
        "fr": undefined,
      },
      "paymentInterface": undefined,
    }
  `);
  expect(paymentUSADraft.paymentStatus).toMatchInlineSnapshot(`
    {
      "interfaceCode": undefined,
      "interfaceText": "Paid",
      "state": undefined,
    }
  `);
  expect(paymentUSADraft.transactions).toMatchInlineSnapshot(`
    [
      {
        "amount": {
          "centAmount": 32348,
          "currencyCode": "USD",
        },
        "custom": undefined,
        "interactionId": "123456789",
        "state": "Pending",
        "timestamp": "2023-07-01T03:15:00.000Z",
        "type": "Authorization",
      },
      {
        "amount": {
          "centAmount": 32348,
          "currencyCode": "USD",
        },
        "custom": undefined,
        "interactionId": "345678912",
        "state": "Success",
        "timestamp": "2023-07-01T03:17:00.000Z",
        "type": "Charge",
      },
    ]
  `);
  expect(paymentUSADraft.interfaceInteractions).toMatchInlineSnapshot(
    `undefined`
  );
  expect(paymentUSADraft.custom).toMatchInlineSnapshot(`undefined`);
});

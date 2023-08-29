import type { TPaymentDraft } from '../../../types';
import paymentAUS2 from './payment-aus2';

it(`should set all fields to specified values`, () => {
  const paymentDraftAUS2 = paymentAUS2().build<TPaymentDraft>();
  expect(paymentDraftAUS2.key).toMatchInlineSnapshot(`undefined`);
  expect(paymentDraftAUS2.anonymousId).toMatchInlineSnapshot(`undefined`);
  expect(paymentDraftAUS2.interfaceId).toMatchInlineSnapshot(`undefined`);
  expect(paymentDraftAUS2.customer).toMatchInlineSnapshot(`
    {
      "key": "12345",
      "typeId": "customer",
    }
  `);
  expect(paymentDraftAUS2.paymentMethodInfo).toMatchInlineSnapshot(`
    {
      "method": "Gift Card",
      "name": {
        "de": undefined,
        "en": "Gift Card",
        "fr": undefined,
      },
      "paymentInterface": null,
    }
  `);
  expect(paymentDraftAUS2.paymentStatus).toMatchInlineSnapshot(`
    {
      "interfaceCode": undefined,
      "interfaceText": "Paid",
      "state": undefined,
    }
  `);
  expect(paymentDraftAUS2.transactions).toMatchInlineSnapshot(`
    [
      {
        "amount": {
          "centAmount": 4000,
          "currencyCode": "AUD",
        },
        "custom": undefined,
        "interactionId": "741852963",
        "state": "Pending",
        "timestamp": "2023-07-01T13:00:00.000Z",
        "type": "Authorization",
      },
      {
        "amount": {
          "centAmount": 4000,
          "currencyCode": "AUD",
        },
        "custom": undefined,
        "interactionId": "321654987",
        "state": "Success",
        "timestamp": "2023-07-01T13:05:00.000Z",
        "type": "Charge",
      },
    ]
  `);
  expect(paymentDraftAUS2.interfaceInteractions).toMatchInlineSnapshot(
    `undefined`
  );
  expect(paymentDraftAUS2.custom).toMatchInlineSnapshot(`undefined`);
});

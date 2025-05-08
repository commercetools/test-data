import type { TPaymentDraft } from '../../../types';
import paymentAUS1 from './payment-aus1';

it(`should set all fields to specified values`, () => {
  const paymentDraftAUS2 = paymentAUS1().build<TPaymentDraft>();
  expect(paymentDraftAUS2.key).toMatchInlineSnapshot(
    `"sample-australia-02-cart"`
  );
  expect(paymentDraftAUS2.anonymousId).toMatchInlineSnapshot(`undefined`);
  expect(paymentDraftAUS2.interfaceId).toMatchInlineSnapshot(`undefined`);
  expect(paymentDraftAUS2.customer).toMatchInlineSnapshot(`
    {
      "key": "1234",
      "typeId": "customer",
    }
  `);
  expect(paymentDraftAUS2.paymentMethodInfo).toMatchInlineSnapshot(`
    {
      "method": "Debit Card",
      "name": {
        "de": undefined,
        "en": "Debit Card",
        "fr": undefined,
      },
      "paymentInterface": undefined,
    }
  `);
  expect(paymentDraftAUS2.paymentStatus).toMatchInlineSnapshot(`
    {
      "interfaceCode": undefined,
      "interfaceText": "Pending",
      "state": undefined,
    }
  `);
  expect(paymentDraftAUS2.transactions).toMatchInlineSnapshot(`
    [
      {
        "amount": {
          "centAmount": 4075,
          "currencyCode": "AUD",
        },
        "custom": undefined,
        "interactionId": "147258369",
        "state": "Pending",
        "timestamp": "2023-07-01T13:00:00.000Z",
        "type": "Authorization",
      },
    ]
  `);
  expect(paymentDraftAUS2.interfaceInteractions).toMatchInlineSnapshot(
    `undefined`
  );
  expect(paymentDraftAUS2.custom).toMatchInlineSnapshot(`undefined`);
});

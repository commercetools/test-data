import { TPaymentDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyPaymentDraft = empty().build<TPaymentDraft>();
  expect(emptyPaymentDraft.key).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.anonymousId).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.interfaceId).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.customer).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.paymentMethodInfo).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyPaymentDraft.paymentStatus).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.transactions).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentDraft.interfaceInteractions).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyPaymentDraft.custom).toMatchInlineSnapshot(`undefined`);
});

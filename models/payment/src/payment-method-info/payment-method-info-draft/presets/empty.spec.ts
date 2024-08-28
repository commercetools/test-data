import type { TPaymentMethodInfoDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyPaymentMethodInfoDraft = empty().build<TPaymentMethodInfoDraft>();
  expect(emptyPaymentMethodInfoDraft.paymentInterface).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyPaymentMethodInfoDraft.method).toMatchInlineSnapshot(`undefined`);
  expect(emptyPaymentMethodInfoDraft.name).toMatchInlineSnapshot(`undefined`);
});

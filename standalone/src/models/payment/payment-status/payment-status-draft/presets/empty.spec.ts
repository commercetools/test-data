import { TPaymentStatusDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyPaymentStatusDraft = empty().build<TPaymentStatusDraft>();
  expect(emptyPaymentStatusDraft.interfaceCode).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyPaymentStatusDraft.interfaceText).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyPaymentStatusDraft.state).toMatchInlineSnapshot(`undefined`);
});

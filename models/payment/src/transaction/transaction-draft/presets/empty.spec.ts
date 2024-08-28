import type { TTransactionDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyTransactionDraft = empty().build<TTransactionDraft>();
  expect(emptyTransactionDraft.interactionId).toMatchInlineSnapshot(
    `undefined`
  );
  expect(emptyTransactionDraft.state).toMatchInlineSnapshot(`undefined`);
  expect(emptyTransactionDraft.timestamp).toMatchInlineSnapshot(`undefined`);
  expect(emptyTransactionDraft.custom).toMatchInlineSnapshot(`undefined`);
});

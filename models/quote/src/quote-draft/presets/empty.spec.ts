import type { TQuoteDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TQuoteDraft>();
  expect(emptyDraft).toMatchObject({
    key: undefined,
    stagedQuoteStateToSent: undefined,
    state: undefined,
    custom: undefined,
  });
});

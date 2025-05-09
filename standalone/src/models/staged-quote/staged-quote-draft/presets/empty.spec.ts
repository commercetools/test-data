import { TStagedQuoteDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TStagedQuoteDraft>();
  expect(emptyDraft).toMatchObject({
    key: undefined,
    quoteRequestStateToAccepted: undefined,
    state: undefined,
    custom: undefined,
  });
});

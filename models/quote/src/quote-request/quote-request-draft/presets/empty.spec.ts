import { TQuoteRequestDraft } from '../../types';
import empty from './empty';

it(`should set all specified fields to undefined`, () => {
  const emptyDraft = empty().build<TQuoteRequestDraft>();
  expect(emptyDraft).toMatchObject({
    comment: undefined,
    state: undefined,
    purchaseOrderNumber: undefined,
    custom: undefined,
  });
});

import type { TReferenceDraft } from '../../../types';
import stagedQuoteReference from './staged-quote-reference';

it('should build a staged-quote reference', () => {
  const built = stagedQuoteReference().build<TReferenceDraft<'staged-quote'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'staged-quote',
  });
});

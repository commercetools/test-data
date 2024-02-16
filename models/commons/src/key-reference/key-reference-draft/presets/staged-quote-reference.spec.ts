import type { TKeyReferenceDraft } from '../../types';
import stagedQuoteReference from './staged-quote-reference';

it('should build staged quote reference', () => {
  const built = stagedQuoteReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'staged-quote',
  });
});

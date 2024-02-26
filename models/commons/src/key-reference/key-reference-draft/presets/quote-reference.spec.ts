import type { TKeyReferenceDraft } from '../../types';
import quoteReference from './quote-reference';

it('should build quote reference', () => {
  const built = quoteReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'quote',
  });
});

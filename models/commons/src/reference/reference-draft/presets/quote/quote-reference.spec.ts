import type { TReferenceDraft } from '../../../types';
import quoteReference from './quote-reference';

it('should build a quote reference', () => {
  const built = quoteReference().build<TReferenceDraft<'quote'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'quote',
  });
});

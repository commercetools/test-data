import type { TKeyReferenceDraft } from '../../types';
import quoteRequestReference from './quote-request-reference';

it('should build quote request reference', () => {
  const built = quoteRequestReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'quote-request',
  });
});

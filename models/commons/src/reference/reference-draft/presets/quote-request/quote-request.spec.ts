import type { TReferenceDraft } from '../../../types';
import quoteRequestReference from './quote-request-reference';

it('should build a quote-request reference', () => {
  const built =
    quoteRequestReference().build<TReferenceDraft<'quote-request'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'quote-request',
  });
});

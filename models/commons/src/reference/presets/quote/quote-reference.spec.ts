import type { TReference } from '../../types';
import quoteReference from './quote-reference';

it('should build a quote reference', () => {
  const built = quoteReference().build<TReference<'quote'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'quote',
  });
});

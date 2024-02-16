import type { TKeyReference } from '../types';
import stagedQuote from './staged-quote-reference';

it('should build staged quote reference', () => {
  const built = stagedQuote().build<TKeyReference>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'staged-quote',
  });
});

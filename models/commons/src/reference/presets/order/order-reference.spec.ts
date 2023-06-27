import type { TReference } from '../../types';
import orderReference from './order-reference';

it('should build an order reference', () => {
  const built = orderReference().build<TReference<'order'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'order',
  });
});

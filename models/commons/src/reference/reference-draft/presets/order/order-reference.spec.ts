import type { TReferenceDraft } from '../../../types';
import orderReference from './order-reference';

it('should build an order reference', () => {
  const built = orderReference().build<TReferenceDraft<'order'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'order',
  });
});

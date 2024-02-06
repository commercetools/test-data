import type { TReferenceDraft } from '../../../types';
import orderEditReference from './order-edit-reference';

it('should build an order-edit reference', () => {
  const built = orderEditReference().build<TReferenceDraft<'order-edit'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'order-edit',
  });
});

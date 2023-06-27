import type { TReference } from '../../types';
import customerGroupReference from './customer-group-reference';

it('should build a customer-group reference', () => {
  const built = customerGroupReference().build<TReference<'customer-group'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'customer-group',
  });
});

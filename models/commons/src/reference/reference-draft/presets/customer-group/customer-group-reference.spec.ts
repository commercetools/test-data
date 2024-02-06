import type { TReferenceDraft } from '../../../types';
import customerGroupReference from './customer-group-reference';

it('should build a customer-group reference', () => {
  const built =
    customerGroupReference().build<TReferenceDraft<'customer-group'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'customer-group',
  });
});

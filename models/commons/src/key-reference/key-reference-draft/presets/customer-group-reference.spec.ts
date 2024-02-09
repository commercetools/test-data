import type { TKeyReferenceDraft } from '../../types';
import customerGroupReference from './customer-group-reference';

it('should build customer group reference', () => {
  const built = customerGroupReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'customer-group',
  });
});

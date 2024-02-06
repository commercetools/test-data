import type { TKeyReferenceDraft } from '../../types';
import customer from './customer-reference';

it('should build customer reference', () => {
  const built = customer().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'customer',
  });
});

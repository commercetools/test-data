import type { TReference } from '../../types';
import directDiscountReference from './direct-discount-reference';

it('should build a direct-discount reference', () => {
  const built =
    directDiscountReference().build<TReference<'direct-discount'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'direct-discount',
  });
});

import type { TReference } from '../../types';
import cartReference from './cart-reference';

it('should build a cart reference', () => {
  const built = cartReference().build<TReference<'cart'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'cart',
  });
});

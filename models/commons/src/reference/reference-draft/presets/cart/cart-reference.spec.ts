import type { TReferenceDraft } from '../../../types';
import cartReference from './cart-reference';

it('should build a cart reference', () => {
  const built = cartReference().build<TReferenceDraft<'cart'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'cart',
  });
});

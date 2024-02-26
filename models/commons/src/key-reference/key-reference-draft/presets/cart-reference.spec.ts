import type { TKeyReferenceDraft } from '../../types';
import cartReference from './cart-reference';

it('should build cart reference', () => {
  const built = cartReference().build<TKeyReferenceDraft>();
  expect(built).toEqual({
    key: expect.any(String),
    typeId: 'cart',
  });
});

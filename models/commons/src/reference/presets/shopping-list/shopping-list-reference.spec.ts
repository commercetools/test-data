import type { TReference } from '../../types';
import shoppingListReference from './shopping-list-reference';

it('should build a shopping-list reference', () => {
  const built = shoppingListReference().build<TReference<'shopping-list'>>();
  expect(built).toEqual({
    id: expect.any(String),
    typeId: 'shopping-list',
  });
});

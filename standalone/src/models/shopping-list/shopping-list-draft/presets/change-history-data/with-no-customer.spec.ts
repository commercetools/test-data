import type { TShoppingListDraft } from '../../../types';
import withNoCustomer from './with-no-customer';

describe('Shopping List with no customer', () => {
  it('should return a shopping list with customer undefined', () => {
    const shoppingList = withNoCustomer().build<TShoppingListDraft>();

    expect(shoppingList).toEqual(
      expect.objectContaining({
        customer: undefined,
      })
    );
  });
});

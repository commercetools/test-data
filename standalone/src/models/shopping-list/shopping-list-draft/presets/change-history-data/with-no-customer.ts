import ShoppingListDraft from '../../builder';

const withNoCustomer = () => ShoppingListDraft().customer(undefined);

export default withNoCustomer;

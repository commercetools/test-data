import AssociateRole from '../builder';
import { CART_PERMISSIONS } from '../constants';

const withMyCartPermissions = () =>
  AssociateRole().permissions([
    CART_PERMISSIONS.CREATE_MY_CARTS,
    CART_PERMISSIONS.DELETE_MY_CARTS,
    CART_PERMISSIONS.UPDATE_MY_CARTS,
    CART_PERMISSIONS.VIEW_MY_CARTS,
  ]);

export default withMyCartPermissions;

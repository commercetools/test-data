import AssociateRole from '../builder';
import { ORDER_PERMISSIONS } from '../constants';

const withMyOrderPermissions = () =>
  AssociateRole().permissions([
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_CARTS,
    ORDER_PERMISSIONS.CREATE_MY_ORDERS_FROM_MY_QUOTES,
    ORDER_PERMISSIONS.UPDATE_MY_ORDERS,
    ORDER_PERMISSIONS.VIEW_MY_ORDERS,
  ]);

export default withMyOrderPermissions;

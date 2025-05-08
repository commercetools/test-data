const BUSINESS_UNIT_PERMISSIONS = {
  ADD_CHILD_UNITS: 'AddChildUnits',
  UPDATE_ASSOCIATES: 'UpdateAssociates',
  UPDATE_BUSINESS_UNIT_DETAILS: 'UpdateBusinessUnitDetails',
  UPDATE_PARENT_UNIT: 'UpdateParentUnit',
};

const CART_PERMISSIONS = {
  VIEW_MY_CARTS: 'ViewMyCarts',
  CREATE_MY_CARTS: 'CreateMyCarts',
  UPDATE_MY_CARTS: 'UpdateMyCarts',
  DELETE_MY_CARTS: 'DeleteMyCarts',
  VIEW_OTHERS_CARTS: 'ViewOthersCarts',
  CREATE_OTHERS_CARTS: 'CreateOthersCarts',
  UPDATE_OTHERS_CARTS: 'UpdateOthersCarts',
  DELETE_OTHERS_CARTS: 'DeleteOthersCarts',
};

const ORDER_PERMISSIONS = {
  CREATE_MY_ORDERS_FROM_MY_CARTS: 'CreateMyOrdersFromMyCarts',
  CREATE_MY_ORDERS_FROM_MY_QUOTES: 'CreateMyOrdersFromMyQuotes',
  UPDATE_MY_ORDERS: 'UpdateMyOrders',
  VIEW_MY_ORDERS: 'ViewMyOrders',
  CREATE_ORDERS_FROM_OTHERS_CARTS: 'CreateOrdersFromOthersCarts',
  CREATE_ORDERS_FROM_OTHERS_QUOTES: 'CreateOrdersFromOthersQuotes',
  VIEW_OTHERS_ORDERS: 'ViewOthersOrders',
  UPDATE_OTHERS_ORDERS: 'UpdateOthersOrders',
};

const QUOTE_PERMISSIONS = {
  VIEW_MY_QUOTES: 'ViewMyQuotes',
  ACCEPT_MY_QUOTES: 'AcceptMyQuotes',
  DECLINE_MY_QUOTES: 'DeclineMyQuotes',
  RENEGOTIATE_MY_QUOTES: 'RenegotiateMyQuotes',
  VIEW_OTHERS_QUOTES: 'ViewOthersQuotes',
  ACCEPT_OTHERS_QUOTES: 'AcceptOthersQuotes',
  DECLINE_OTHERS_QUOTES: 'DeclineOthersQuotes',
  RENEGOTIATE_OTHERS_QUOTES: 'RenegotiateOthersQuotes',
};

const QUOTE_REQUEST_PERMISSIONS = {
  CREATE_MY_QUOTE_REQUESTS_FROM_MY_CARTS: 'CreateMyQuoteRequestsFromMyCarts',
  VIEW_MY_QUOTE_REQUESTS: 'ViewMyQuoteRequests',
  UPDATE_MY_QUOTE_REQUESTS: 'UpdateMyQuoteRequests',
  CREATE_QUOTE_REQUESTS_FROM_OTHERS_CARTS: 'CreateQuoteRequestsFromOthersCarts',
  VIEW_OTHERS_QUOTE_REQUESTS: 'ViewOthersQuoteRequests',
  UPDATE_OTHERS_QUOTE_REQUESTS: 'UpdateOthersQuoteRequests',
};

export {
  BUSINESS_UNIT_PERMISSIONS,
  CART_PERMISSIONS,
  ORDER_PERMISSIONS,
  QUOTE_PERMISSIONS,
  QUOTE_REQUEST_PERMISSIONS,
};

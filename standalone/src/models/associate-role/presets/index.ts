import * as withAllBusinessUnit from './with-all-business-unit-permissions';
import * as withAllCart from './with-all-cart-permissions';
import * as withAllOrder from './with-all-order-permissions';
import * as withAllQuote from './with-all-quote-permissions';
import * as withAllQuoteRequest from './with-all-quote-request-permissions';
import * as withMyCart from './with-my-cart-permissions';
import * as withMyOrder from './with-my-order-permissions';
import * as withMyQuote from './with-my-quote-permissions';
import * as withMyQuoteRequest from './with-my-quote-request-permissions';

export const restPresets = {
  withAllBusinessUnitPermissions: withAllBusinessUnit.restPreset,
  withAllCartPermissions: withAllCart.restPreset,
  withAllOrderPermissions: withAllOrder.restPreset,
  withAllQuotePermissions: withAllQuote.restPreset,
  withAllQuoteRequestPermissions: withAllQuoteRequest.restPreset,
  withMyCartPermissions: withMyCart.restPreset,
  withMyOrderPermissions: withMyOrder.restPreset,
  withMyQuotePermissions: withMyQuote.restPreset,
  withMyQuoteRequestPermissions: withMyQuoteRequest.restPreset,
};

export const graphqlPresets = {
  withAllBusinessUnitPermissions: withAllBusinessUnit.graphqlPreset,
  withAllCartPermissions: withAllCart.graphqlPreset,
  withAllOrderPermissions: withAllOrder.graphqlPreset,
  withAllQuotePermissions: withAllQuote.graphqlPreset,
  withAllQuoteRequestPermissions: withAllQuoteRequest.graphqlPreset,
  withMyCartPermissions: withMyCart.graphqlPreset,
  withMyOrderPermissions: withMyOrder.graphqlPreset,
  withMyQuotePermissions: withMyQuote.graphqlPreset,
  withMyQuoteRequestPermissions: withMyQuoteRequest.graphqlPreset,
};

export const compatPresets = {
  withAllBusinessUnitPermissions: withAllBusinessUnit.compatPreset,
  withAllCartPermissions: withAllCart.compatPreset,
  withAllOrderPermissions: withAllOrder.compatPreset,
  withAllQuotePermissions: withAllQuote.compatPreset,
  withAllQuoteRequestPermissions: withAllQuoteRequest.compatPreset,
  withMyCartPermissions: withMyCart.compatPreset,
  withMyOrderPermissions: withMyOrder.compatPreset,
  withMyQuotePermissions: withMyQuote.compatPreset,
  withMyQuoteRequestPermissions: withMyQuoteRequest.compatPreset,
};

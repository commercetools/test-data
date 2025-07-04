import {
  TCtpInventoryMode,
  TCtpPaymentState,
  TCtpOrderState,
  TCtpRoundingMode,
  TCtpShipmentState,
  TCtpShippingMode,
  TCtpTaxCalculationMode,
  TCtpTaxMode,
  TCtpCartOrigin,
} from '@/graphql-types';

export const paymentState = TCtpPaymentState;

export const orderState = TCtpOrderState;

export const shipmentState = TCtpShipmentState;

export const shippingMode = TCtpShippingMode;

export const taxMode = TCtpTaxMode;

export const roundingMode = TCtpRoundingMode;

export const taxCalculationMode = TCtpTaxCalculationMode;

export const inventoryMode = TCtpInventoryMode;

export const orderOrigin = TCtpCartOrigin;

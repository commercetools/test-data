import {
  TCtpReturnShipmentState,
  TCtpReturnPaymentState,
} from '@/graphql-types';

export const shipmentState = TCtpReturnShipmentState;

export const paymentState = TCtpReturnPaymentState;

export const LineItemReturnItemType = 'LineItemReturnItem' as const;

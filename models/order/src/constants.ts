export const paymentState = {
  BalanceDue: 'BalanceDue',
  Failed: 'Failed',
  Pending: 'Pending',
  CreditOwed: 'CreditOwed',
  Paid: 'Paid',
} as const;

export const orderState = {
  Open: 'Open',
  Confirmed: 'Confirmed',
  Complete: 'Complete',
  Cancelled: 'Cancelled',
} as const;

export const shipmentState = {
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Ready: 'Ready',
  Pending: 'Pending',
  Delayed: 'Delayed',
  Partial: 'Partial',
  Backorder: 'Backorder',
} as const;

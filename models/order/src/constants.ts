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

export const shippingMode = {
  Single: 'Single',
  Multiple: 'Multiple',
} as const;

export const taxMode = {
  Platform: 'Platform',
  External: 'External',
  ExternalAmount: 'ExternalAmount',
  Disabled: 'Disabled',
} as const;

export const taxRoundingMode = {
  HalfEven: 'HalfEven',
  HalfUp: 'HalfUp',
  HalfDown: 'HalfDown',
} as const;

export const taxCalculationMode = {
  LineItemLevel: 'LineItemLevel',
  UnitPriceLevel: 'UnitPriceLevel',
} as const;

export const inventoryMode = {
  TrackOnly: 'TrackOnly',
  ReserveOnOrder: 'ReserveOnOrder',
  None: 'None',
} as const;

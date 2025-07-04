export const inventoryMode = {
  TrackOnly: 'TrackOnly',
  ReserveOnOrder: 'ReserveOnOrder',
  None: 'None',
} as const;

export const taxMode = {
  Platform: 'Platform',
  External: 'External',
  ExternalAmount: 'ExternalAmount',
  Disabled: 'Disabled',
} as const;

export const roundingMode = {
  HalfEven: 'HalfEven',
  HalfUp: 'HalfUp',
  HalfDown: 'HalfDown',
} as const;

export const taxCalculationMode = {
  LineItemLevel: 'LineItemLevel',
  UnitPriceLevel: 'UnitPriceLevel',
} as const;

export const origin = {
  Customer: 'Customer',
  Merchant: 'Merchant',
  Quote: 'Quote',
} as const;

export const shippingMode = {
  Single: 'Single',
  Multiple: 'Multiple',
} as const;

export const cartState = {
  Active: 'Active',
  Merged: 'Merged',
  Ordered: 'Ordered',
  Frozen: 'Frozen',
} as const;

export const customLineItemPriceMode = {
  Standard: 'Standard',
  External: 'External',
} as const;

export const priceMode = {
  Platform: 'Platform',
  ExternalPrice: 'ExternalPrice',
  ExternalTotal: 'ExternalTotal',
} as const;

export const lineItemMode = {
  Standard: 'Standard',
  GiftLineItem: 'GiftLineItem',
} as const;

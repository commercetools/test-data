export const QUOTE_REQUEST_STATE = {
  submitted: 'Submitted',
  accepted: 'Accepted',
  closed: 'Closed',
  rejected: 'Rejected',
  cancelled: 'Cancelled',
} as const;

export const TAX_MODE = {
  Platform: 'Platform',
  External: 'External',
  ExternalAmount: 'ExternalAmount',
  Disabled: 'Disabled',
} as const;

export const TAX_ROUNDING_MODE = {
  HalfEven: 'HalfEven',
  HalfUp: 'HalfUp',
  HalfDown: 'HalfDown',
} as const;

export const TAX_CALCULATION_MODE = {
  LineItemLevel: 'LineItemLevel',
  UnitPriceLevel: 'UnitPriceLevel',
} as const;

export const INVENTORY_MODE = {
  TrackOnly: 'TrackOnly',
  ReserveOnOrder: 'ReserveOnOrder',
  None: 'None',
} as const;

export const PRICE_ROUNDING_MODE = {
  HalfEven: 'HalfEven',
  HalfUp: 'HalfUp',
  HalfDown: 'HalfDown',
} as const;

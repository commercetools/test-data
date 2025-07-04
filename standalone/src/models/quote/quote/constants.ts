export const QUOTE_STATE = {
  pending: 'Pending',
  declined: 'Declined',
  declinedForRenegotiation: 'DeclinedForRenegotiation',
  renegotiationAddressed: 'RenegotiationAddressed',
  accepted: 'Accepted',
  withdrawn: 'Withdrawn',
} as const;

export const TAX_MODE = {
  Platform: 'Platform',
  External: 'External',
  ExternalAmount: 'ExternalAmount',
  Disabled: 'Disabled',
} as const;

export const ROUNDING_MODE = {
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

export const inventoryMode = {
  TrackOnly: 'TrackOnly',
  ReserveOnOrder: 'ReserveOnOrder',
  None: 'None',
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

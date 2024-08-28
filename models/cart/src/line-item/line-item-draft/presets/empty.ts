import type { TLineItemDraftBuilder } from '../../types';
import LineItemDraft from '../builder';

const empty = (): TLineItemDraftBuilder =>
  LineItemDraft()
    .productId(undefined)
    .variantId(undefined)
    .sku(undefined)
    .quantity(undefined)
    .addedAt(undefined)
    .distributionChannel(undefined)
    .supplyChannel(undefined)
    .externalPrice(undefined)
    .externalTotalPrice(undefined)
    .externalTaxRate(undefined)
    .inventoryMode(undefined)
    .shippingDetails(undefined)
    .custom(undefined);

export default empty;

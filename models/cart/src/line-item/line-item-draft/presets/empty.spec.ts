import type { TLineItemDraft } from '../../types';
import empty from './empty';

it('should set all specified fields to undefined', () => {
  const emptyLineItemDraft = empty().build<TLineItemDraft>();
  expect(emptyLineItemDraft).toMatchObject({
    productId: undefined,
    variantId: undefined,
    sku: undefined,
    quantity: undefined,
    addedAt: undefined,
    distributionChannel: undefined,
    supplyChannel: undefined,
    externalPrice: undefined,
    externalTotalPrice: undefined,
    externalTaxRate: undefined,
    inventoryMode: undefined,
    shippingDetails: undefined,
    custom: undefined,
  });
});

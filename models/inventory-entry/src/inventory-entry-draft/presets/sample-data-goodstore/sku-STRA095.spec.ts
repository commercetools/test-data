import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSTRA095 from './sku-STRA095';

describe('With skuSTRA095 preset', () => {
  it('should return skuSTRA095 preset', () => {
    const skuSTRA095Preset = skuSTRA095().build<TInventoryEntryDraft>();
    expect(skuSTRA095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSTRA095 preset when built for GraphQL', () => {
    const skuSTRA095PresetGraphql =
      skuSTRA095().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSTRA095PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": undefined,
      }
    `);
  });
});

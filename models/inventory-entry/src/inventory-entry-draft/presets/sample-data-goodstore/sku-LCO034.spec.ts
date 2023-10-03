import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuLCO034 from './sku-LCO034';

describe('With skuLCO034 preset', () => {
  it('should return skuLCO034 preset', () => {
    const skuLCO034Preset = skuLCO034().build<TInventoryEntryDraft>();
    expect(skuLCO034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuLCO034 preset when built for GraphQL', () => {
    const skuLCO034PresetGraphql =
      skuLCO034().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLCO034PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });
});

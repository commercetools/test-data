import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuWCS09 from './sku-WCS09';

describe('With skuWCS09 preset', () => {
  it('should return skuWCS09 preset', () => {
    const skuWCS09Preset = skuWCS09().build<TInventoryEntryDraft>();
    expect(skuWCS09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuWCS09 preset when built for GraphQL', () => {
    const skuWCS09PresetGraphql =
      skuWCS09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWCS09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

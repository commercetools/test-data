import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuHDG02 from './sku-HDG02';

describe('With skuHDG02 preset', () => {
  it('should return skuHDG02 preset', () => {
    const skuHDG02Preset = skuHDG02().build<TInventoryEntryDraft>();
    expect(skuHDG02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuHDG02 preset when built for GraphQL', () => {
    const skuHDG02PresetGraphql =
      skuHDG02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHDG02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

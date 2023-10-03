import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTARM03 from './sku-TARM03';

describe('With skuTARM03 preset', () => {
  it('should return skuTARM03 preset', () => {
    const skuTARM03Preset = skuTARM03().build<TInventoryEntryDraft>();
    expect(skuTARM03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuTARM03 preset when built for GraphQL', () => {
    const skuTARM03PresetGraphql =
      skuTARM03().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTARM03PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});

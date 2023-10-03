import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTST02 from './sku-TST02';

describe('With skuTST02 preset', () => {
  it('should return skuTST02 preset', () => {
    const skuTST02Preset = skuTST02().build<TInventoryEntryDraft>();
    expect(skuTST02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuTST02 preset when built for GraphQL', () => {
    const skuTST02PresetGraphql =
      skuTST02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTST02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

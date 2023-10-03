import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMMST01 from './sku-MMST01';

describe('With skuMMST01 preset', () => {
  it('should return skuMMST01 preset', () => {
    const skuMMST01Preset = skuMMST01().build<TInventoryEntryDraft>();
    expect(skuMMST01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMMST01 preset when built for GraphQL', () => {
    const skuMMST01PresetGraphql =
      skuMMST01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMMST01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuRMP01 from './sku-RMP01';

describe('With skuRMP01 preset', () => {
  it('should return skuRMP01 preset', () => {
    const skuRMP01Preset = skuRMP01().build<TInventoryEntryDraft>();
    expect(skuRMP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuRMP01 preset when built for GraphQL', () => {
    const skuRMP01PresetGraphql =
      skuRMP01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRMP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "RMP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

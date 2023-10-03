import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuGRCG01 from './sku-GRCG01';

describe('With skuGRCG01 preset', () => {
  it('should return skuGRCG01 preset', () => {
    const skuGRCG01Preset = skuGRCG01().build<TInventoryEntryDraft>();
    expect(skuGRCG01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuGRCG01 preset when built for GraphQL', () => {
    const skuGRCG01PresetGraphql =
      skuGRCG01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGRCG01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

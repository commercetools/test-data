import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuGMCT01 from './sku-GMCT01';

describe('With skuGMCT01 preset', () => {
  it('should return skuGMCT01 preset', () => {
    const skuGMCT01Preset = skuGMCT01().build<TInventoryEntryDraft>();
    expect(skuGMCT01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuGMCT01 preset when built for GraphQL', () => {
    const skuGMCT01PresetGraphql =
      skuGMCT01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGMCT01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

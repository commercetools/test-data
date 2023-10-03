import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuMUQB01 from './sku-MUQB01';

describe('With skuMUQB01 preset', () => {
  it('should return skuMUQB01 preset', () => {
    const skuMUQB01Preset = skuMUQB01().build<TInventoryEntryDraft>();
    expect(skuMUQB01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuMUQB01 preset when built for GraphQL', () => {
    const skuMUQB01PresetGraphql =
      skuMUQB01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMUQB01PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBAMB084 from './sku-BAMB084';

describe('With skuBAMB084 preset', () => {
  it('should return skuBAMB084 preset', () => {
    const skuBAMB084Preset = skuBAMB084().build<TInventoryEntryDraft>();
    expect(skuBAMB084Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuBAMB084 preset when built for GraphQL', () => {
    const skuBAMB084PresetGraphql =
      skuBAMB084().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBAMB084PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BAMB-084",
        "supplyChannel": undefined,
      }
    `);
  });
});

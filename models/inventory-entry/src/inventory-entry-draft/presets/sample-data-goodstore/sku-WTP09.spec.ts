import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuWTP09 from './sku-WTP09';

describe('With skuWTP09 preset', () => {
  it('should return skuWTP09 preset', () => {
    const skuWTP09Preset = skuWTP09().build<TInventoryEntryDraft>();
    expect(skuWTP09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuWTP09 preset when built for GraphQL', () => {
    const skuWTP09PresetGraphql =
      skuWTP09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWTP09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WTP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

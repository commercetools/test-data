import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuADPC09 from './sku-ADPC09';

describe('With skuADPC09 preset', () => {
  it('should return skuADPC09 preset', () => {
    const skuADPC09Preset = skuADPC09().build<TInventoryEntryDraft>();
    expect(skuADPC09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuADPC09 preset when built for GraphQL', () => {
    const skuADPC09PresetGraphql =
      skuADPC09().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuADPC09PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

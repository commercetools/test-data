import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuEARM04 from './sku-EARM04';

describe('With skuEARM04 preset', () => {
  it('should return skuEARM04 preset', () => {
    const skuEARM04Preset = skuEARM04().build<TInventoryEntryDraft>();
    expect(skuEARM04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuEARM04 preset when built for GraphQL', () => {
    const skuEARM04PresetGraphql =
      skuEARM04().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEARM04PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "EARM-04",
        "supplyChannel": undefined,
      }
    `);
  });
});

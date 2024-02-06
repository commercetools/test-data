import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuFARM05 from './sku-FARM05';

describe('With skuFARM05 preset', () => {
  it('should return skuFARM05 preset', () => {
    const skuFARM05Preset = skuFARM05().build<TInventoryEntryDraft>();
    expect(skuFARM05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuFARM05 preset when built for GraphQL', () => {
    const skuFARM05PresetGraphql =
      skuFARM05().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFARM05PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });
});

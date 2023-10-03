import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSCM02 from './sku-SCM02';

describe('With skuSCM02 preset', () => {
  it('should return skuSCM02 preset', () => {
    const skuSCM02Preset = skuSCM02().build<TInventoryEntryDraft>();
    expect(skuSCM02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it('should return skuSCM02 preset when built for GraphQL', () => {
    const skuSCM02PresetGraphql =
      skuSCM02().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSCM02PresetGraphql).toMatchInlineSnapshot(`
      {
        "__typename": "InventoryEntryDraft",
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

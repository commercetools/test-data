import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSTRA095Channel from './sku-STRA095-channel';

describe('with skuSTRA095Channel preset', () => {
  it('should return skuSTRA095Channel preset', () => {
    const skuSTRA095Preset = skuSTRA095Channel().build<TInventoryEntryDraft>();
    expect(skuSTRA095Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuSTRA095Channel preset when built for GraphQL', () => {
    const skuSTRA095PresetGraphql =
      skuSTRA095Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSTRA095PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "STRA-095",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});

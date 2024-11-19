import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuSWB01Channel from './sku-SWB01-channel';

describe('with skuSWB01Channel preset', () => {
  it('should return skuSWB01Channel preset', () => {
    const skuSWB01Preset = skuSWB01Channel().build<TInventoryEntryDraft>();
    expect(skuSWB01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SWB-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuSWB01Channel preset when built for GraphQL', () => {
    const skuSWB01PresetGraphql =
      skuSWB01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSWB01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SWB-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});

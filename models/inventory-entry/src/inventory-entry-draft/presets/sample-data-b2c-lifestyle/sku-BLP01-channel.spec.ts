import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBLP01Channel from './sku-BLP01-channel';

describe('with skuBLP01Channel preset', () => {
  it('should return skuBLP01Channel preset', () => {
    const skuBLP01Preset = skuBLP01Channel().build<TInventoryEntryDraft>();
    expect(skuBLP01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuBLP01Channel preset when built for GraphQL', () => {
    const skuBLP01PresetGraphql =
      skuBLP01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBLP01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});

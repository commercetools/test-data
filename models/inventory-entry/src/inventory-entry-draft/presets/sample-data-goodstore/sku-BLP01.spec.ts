import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuBLP01 from './sku-BLP01';

describe('With skuBLP01 preset', () => {
  it('should return skuBLP01 preset', () => {
    const skuBLP01Preset = skuBLP01().build<TInventoryEntryDraft>();
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

  it('should return skuBLP01 preset when built for GraphQL', () => {
    const skuBLP01PresetGraphql =
      skuBLP01().buildGraphql<TInventoryEntryDraftGraphql>();
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

import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTTSS01Channel from './sku-TTSS01-channel';

describe('with skuTTSS01Channel preset', () => {
  it('should return skuTTSS01Channel preset', () => {
    const skuTTSS01Preset = skuTTSS01Channel().build<TInventoryEntryDraft>();
    expect(skuTTSS01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuTTSS01Channel preset when built for GraphQL', () => {
    const skuTTSS01PresetGraphql =
      skuTTSS01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTTSS01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "TTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});

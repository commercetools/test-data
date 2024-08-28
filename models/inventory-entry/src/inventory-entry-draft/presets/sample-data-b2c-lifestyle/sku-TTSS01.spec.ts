import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuTTSS01 from './sku-TTSS01';

describe('With skuTTSS01 preset', () => {
  it('should return skuTTSS01 preset', () => {
    const skuTTSS01Preset = skuTTSS01().build<TInventoryEntryDraft>();
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

  it('should return skuTTSS01 preset when built for GraphQL', () => {
    const skuTTSS01PresetGraphql =
      skuTTSS01().buildGraphql<TInventoryEntryDraftGraphql>();
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

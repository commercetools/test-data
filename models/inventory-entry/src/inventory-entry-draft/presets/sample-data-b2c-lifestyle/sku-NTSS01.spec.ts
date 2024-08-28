import type {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS01 from './sku-NTSS01';

describe('With skuNTSS01 preset', () => {
  it('should return skuNTSS01 preset', () => {
    const skuNTSS01Preset = skuNTSS01().build<TInventoryEntryDraft>();
    expect(skuNTSS01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });

  it('should return skuNTSS01 preset when built for GraphQL', () => {
    const skuNTSS01PresetGraphql =
      skuNTSS01().buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNTSS01PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 97,
        "restockableInDays": undefined,
        "sku": "NTSS-01",
        "supplyChannel": {
          "key": "inventory-channel",
          "typeId": "channel",
        },
      }
    `);
  });
});

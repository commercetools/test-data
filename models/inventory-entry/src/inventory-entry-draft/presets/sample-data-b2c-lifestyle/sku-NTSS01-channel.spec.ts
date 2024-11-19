import {
  TInventoryEntryDraft,
  TInventoryEntryDraftGraphql,
} from '../../../types';
import skuNTSS01Channel from './sku-NTSS01-channel';

describe('with skuNTSS01Channel preset', () => {
  it('should return skuNTSS01Channel preset', () => {
    const skuNTSS01Preset = skuNTSS01Channel().build<TInventoryEntryDraft>();
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
      skuNTSS01Channel().buildGraphql<TInventoryEntryDraftGraphql>();
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

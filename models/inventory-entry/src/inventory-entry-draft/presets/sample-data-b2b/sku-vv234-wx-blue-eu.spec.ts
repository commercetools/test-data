import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxBlueEu from './sku-vv234-wx-blue-eu';

describe(`with skuVv234WxBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuVv234WxBlueEu preset`, () => {
    const skuVv234WxBlueEuPreset =
      skuVv234WxBlueEu().build<TInventoryEntryDraft>();
    expect(skuVv234WxBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuVv234WxBlueEu preset when built for graphql`, () => {
    const skuVv234WxBlueEuPresetGraphql =
      skuVv234WxBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

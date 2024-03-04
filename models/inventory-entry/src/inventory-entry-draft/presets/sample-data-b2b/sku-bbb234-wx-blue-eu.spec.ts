import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxBlueEu from './sku-bbb234-wx-blue-eu';

describe(`with skuBbb234WxBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuBbb234WxBlueEu preset`, () => {
    const skuBbb234WxBlueEuPreset =
      skuBbb234WxBlueEu().build<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxBlueEu preset when built for graphql`, () => {
    const skuBbb234WxBlueEuPresetGraphql =
      skuBbb234WxBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxBlueEu from './sku-hhh234-wx-blue-eu';

describe(`with skuHhh234WxBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuHhh234WxBlueEu preset`, () => {
    const skuHhh234WxBlueEuPreset =
      skuHhh234WxBlueEu().build<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxBlueEu preset when built for graphql`, () => {
    const skuHhh234WxBlueEuPresetGraphql =
      skuHhh234WxBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

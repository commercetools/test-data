import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxRedEu from './sku-hhh234-wx-red-eu';

describe(`with skuHhh234WxRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuHhh234WxRedEu preset`, () => {
    const skuHhh234WxRedEuPreset =
      skuHhh234WxRedEu().build<TInventoryEntryDraft>();
    expect(skuHhh234WxRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxRedEu preset when built for graphql`, () => {
    const skuHhh234WxRedEuPresetGraphql =
      skuHhh234WxRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

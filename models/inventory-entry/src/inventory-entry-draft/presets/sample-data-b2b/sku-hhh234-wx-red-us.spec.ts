import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxRedUs from './sku-hhh234-wx-red-us';

describe(`with skuHhh234WxRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuHhh234WxRedUs preset`, () => {
    const skuHhh234WxRedUsPreset =
      skuHhh234WxRedUs().build<TInventoryEntryDraft>();
    expect(skuHhh234WxRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxRedUs preset when built for graphql`, () => {
    const skuHhh234WxRedUsPresetGraphql =
      skuHhh234WxRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

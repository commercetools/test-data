import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxBlueUs from './sku-hhh234-wx-blue-us';

describe(`with skuHhh234WxBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuHhh234WxBlueUs preset`, () => {
    const skuHhh234WxBlueUsPreset =
      skuHhh234WxBlueUs().build<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxBlueUs preset when built for graphql`, () => {
    const skuHhh234WxBlueUsPresetGraphql =
      skuHhh234WxBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

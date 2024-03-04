import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxGreenUs from './sku-hhh234-wx-green-us';

describe(`with skuHhh234WxGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuHhh234WxGreenUs preset`, () => {
    const skuHhh234WxGreenUsPreset =
      skuHhh234WxGreenUs().build<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxGreenUs preset when built for graphql`, () => {
    const skuHhh234WxGreenUsPresetGraphql =
      skuHhh234WxGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

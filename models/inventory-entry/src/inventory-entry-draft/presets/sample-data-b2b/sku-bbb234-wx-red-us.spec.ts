import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxRedUs from './sku-bbb234-wx-red-us';

describe(`with skuBbb234WxRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuBbb234WxRedUs preset`, () => {
    const skuBbb234WxRedUsPreset =
      skuBbb234WxRedUs().build<TInventoryEntryDraft>();
    expect(skuBbb234WxRedUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxRedUs preset when built for graphql`, () => {
    const skuBbb234WxRedUsPresetGraphql =
      skuBbb234WxRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxRedUs from './sku-vv234-wx-red-us';

describe(`with skuVv234WxRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuVv234WxRedUs preset`, () => {
    const skuVv234WxRedUsPreset =
      skuVv234WxRedUs().build<TInventoryEntryDraft>();
    expect(skuVv234WxRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuVv234WxRedUs preset when built for graphql`, () => {
    const skuVv234WxRedUsPresetGraphql =
      skuVv234WxRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

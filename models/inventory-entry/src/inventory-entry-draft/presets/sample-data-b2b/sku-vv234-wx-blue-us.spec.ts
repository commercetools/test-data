import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxBlueUs from './sku-vv234-wx-blue-us';

describe(`with skuVv234WxBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuVv234WxBlueUs preset`, () => {
    const skuVv234WxBlueUsPreset =
      skuVv234WxBlueUs().build<TInventoryEntryDraft>();
    expect(skuVv234WxBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxBlueUs preset when built for graphql`, () => {
    const skuVv234WxBlueUsPresetGraphql =
      skuVv234WxBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

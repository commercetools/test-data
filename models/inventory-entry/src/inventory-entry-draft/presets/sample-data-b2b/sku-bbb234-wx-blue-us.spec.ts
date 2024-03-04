import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxBlueUs from './sku-bbb234-wx-blue-us';

describe(`with skuBbb234WxBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuBbb234WxBlueUs preset`, () => {
    const skuBbb234WxBlueUsPreset =
      skuBbb234WxBlueUs().build<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxBlueUs preset when built for graphql`, () => {
    const skuBbb234WxBlueUsPresetGraphql =
      skuBbb234WxBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

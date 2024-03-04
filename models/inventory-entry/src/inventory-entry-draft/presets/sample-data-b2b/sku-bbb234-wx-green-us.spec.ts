import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxGreenUs from './sku-bbb234-wx-green-us';

describe(`with skuBbb234WxGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuBbb234WxGreenUs preset`, () => {
    const skuBbb234WxGreenUsPreset =
      skuBbb234WxGreenUs().build<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxGreenUs preset when built for graphql`, () => {
    const skuBbb234WxGreenUsPresetGraphql =
      skuBbb234WxGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxGreenUs from './sku-vv234-wx-green-us';

describe(`with skuVv234WxGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuVv234WxGreenUs preset`, () => {
    const skuVv234WxGreenUsPreset =
      skuVv234WxGreenUs().build<TInventoryEntryDraft>();
    expect(skuVv234WxGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuVv234WxGreenUs preset when built for graphql`, () => {
    const skuVv234WxGreenUsPresetGraphql =
      skuVv234WxGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

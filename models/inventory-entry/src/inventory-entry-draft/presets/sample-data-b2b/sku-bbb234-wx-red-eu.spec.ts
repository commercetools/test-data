import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxRedEu from './sku-bbb234-wx-red-eu';

describe(`with skuBbb234WxRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuBbb234WxRedEu preset`, () => {
    const skuBbb234WxRedEuPreset =
      skuBbb234WxRedEu().build<TInventoryEntryDraft>();
    expect(skuBbb234WxRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxRedEu preset when built for graphql`, () => {
    const skuBbb234WxRedEuPresetGraphql =
      skuBbb234WxRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

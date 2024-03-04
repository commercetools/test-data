import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxRedEu from './sku-vv234-wx-red-eu';

describe(`with skuVv234WxRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuVv234WxRedEu preset`, () => {
    const skuVv234WxRedEuPreset =
      skuVv234WxRedEu().build<TInventoryEntryDraft>();
    expect(skuVv234WxRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxRedEu preset when built for graphql`, () => {
    const skuVv234WxRedEuPresetGraphql =
      skuVv234WxRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

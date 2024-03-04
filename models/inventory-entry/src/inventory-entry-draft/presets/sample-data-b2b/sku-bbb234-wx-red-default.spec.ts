import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxRedDefault from './sku-bbb234-wx-red-default';

describe(`with skuBbb234WxRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuBbb234WxRedDefault preset`, () => {
    const skuBbb234WxRedDefaultPreset =
      skuBbb234WxRedDefault().build<TInventoryEntryDraft>();
    expect(skuBbb234WxRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxRedDefault preset when built for graphql`, () => {
    const skuBbb234WxRedDefaultPresetGraphql =
      skuBbb234WxRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

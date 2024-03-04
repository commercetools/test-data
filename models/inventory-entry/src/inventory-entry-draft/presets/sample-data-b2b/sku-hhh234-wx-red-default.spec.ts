import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxRedDefault from './sku-hhh234-wx-red-default';

describe(`with skuHhh234WxRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuHhh234WxRedDefault preset`, () => {
    const skuHhh234WxRedDefaultPreset =
      skuHhh234WxRedDefault().build<TInventoryEntryDraft>();
    expect(skuHhh234WxRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxRedDefault preset when built for graphql`, () => {
    const skuHhh234WxRedDefaultPresetGraphql =
      skuHhh234WxRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

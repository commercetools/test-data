import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxRedDefault from './sku-vv234-wx-red-default';

describe(`with skuVv234WxRedDefault preset and default-warehouse channel`, () => {
  it(`should return a skuVv234WxRedDefault preset`, () => {
    const skuVv234WxRedDefaultPreset =
      skuVv234WxRedDefault().build<TInventoryEntryDraft>();
    expect(skuVv234WxRedDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxRedDefault preset when built for graphql`, () => {
    const skuVv234WxRedDefaultPresetGraphql =
      skuVv234WxRedDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxRedDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

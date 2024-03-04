import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxBlueDefault from './sku-vv234-wx-blue-default';

describe(`with skuVv234WxBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuVv234WxBlueDefault preset`, () => {
    const skuVv234WxBlueDefaultPreset =
      skuVv234WxBlueDefault().build<TInventoryEntryDraft>();
    expect(skuVv234WxBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuVv234WxBlueDefault preset when built for graphql`, () => {
    const skuVv234WxBlueDefaultPresetGraphql =
      skuVv234WxBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

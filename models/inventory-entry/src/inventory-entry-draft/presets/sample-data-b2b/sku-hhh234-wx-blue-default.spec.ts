import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxBlueDefault from './sku-hhh234-wx-blue-default';

describe(`with skuHhh234WxBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuHhh234WxBlueDefault preset`, () => {
    const skuHhh234WxBlueDefaultPreset =
      skuHhh234WxBlueDefault().build<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxBlueDefault preset when built for graphql`, () => {
    const skuHhh234WxBlueDefaultPresetGraphql =
      skuHhh234WxBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxGreenDefault from './sku-hhh234-wx-green-default';

describe(`with skuHhh234WxGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuHhh234WxGreenDefault preset`, () => {
    const skuHhh234WxGreenDefaultPreset =
      skuHhh234WxGreenDefault().build<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxGreenDefault preset when built for graphql`, () => {
    const skuHhh234WxGreenDefaultPresetGraphql =
      skuHhh234WxGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

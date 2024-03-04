import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxBlueDefault from './sku-bbb234-wx-blue-default';

describe(`with skuBbb234WxBlueDefault preset and default-warehouse channel`, () => {
  it(`should return a skuBbb234WxBlueDefault preset`, () => {
    const skuBbb234WxBlueDefaultPreset =
      skuBbb234WxBlueDefault().build<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxBlueDefault preset when built for graphql`, () => {
    const skuBbb234WxBlueDefaultPresetGraphql =
      skuBbb234WxBlueDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxBlueDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

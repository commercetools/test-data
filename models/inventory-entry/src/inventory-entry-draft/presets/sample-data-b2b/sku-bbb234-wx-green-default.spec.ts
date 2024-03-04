import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxGreenDefault from './sku-bbb234-wx-green-default';

describe(`with skuBbb234WxGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuBbb234WxGreenDefault preset`, () => {
    const skuBbb234WxGreenDefaultPreset =
      skuBbb234WxGreenDefault().build<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxGreenDefault preset when built for graphql`, () => {
    const skuBbb234WxGreenDefaultPresetGraphql =
      skuBbb234WxGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

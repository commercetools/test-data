import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxGreenDefault from './sku-vv234-wx-green-default';

describe(`with skuVv234WxGreenDefault preset and default-warehouse channel`, () => {
  it(`should return a skuVv234WxGreenDefault preset`, () => {
    const skuVv234WxGreenDefaultPreset =
      skuVv234WxGreenDefault().build<TInventoryEntryDraft>();
    expect(skuVv234WxGreenDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxGreenDefault preset when built for graphql`, () => {
    const skuVv234WxGreenDefaultPresetGraphql =
      skuVv234WxGreenDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxGreenDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

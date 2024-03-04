import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxGreenEu from './sku-vv234-wx-green-eu';

describe(`with skuVv234WxGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuVv234WxGreenEu preset`, () => {
    const skuVv234WxGreenEuPreset =
      skuVv234WxGreenEu().build<TInventoryEntryDraft>();
    expect(skuVv234WxGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuVv234WxGreenEu preset when built for graphql`, () => {
    const skuVv234WxGreenEuPresetGraphql =
      skuVv234WxGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "vv234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

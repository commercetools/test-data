import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxGreenEu from './sku-bbb234-wx-green-eu';

describe(`with skuBbb234WxGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuBbb234WxGreenEu preset`, () => {
    const skuBbb234WxGreenEuPreset =
      skuBbb234WxGreenEu().build<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxGreenEu preset when built for graphql`, () => {
    const skuBbb234WxGreenEuPresetGraphql =
      skuBbb234WxGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

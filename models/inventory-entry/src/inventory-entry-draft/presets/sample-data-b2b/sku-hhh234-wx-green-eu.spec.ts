import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxGreenEu from './sku-hhh234-wx-green-eu';

describe(`with skuHhh234WxGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuHhh234WxGreenEu preset`, () => {
    const skuHhh234WxGreenEuPreset =
      skuHhh234WxGreenEu().build<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxGreenEu preset when built for graphql`, () => {
    const skuHhh234WxGreenEuPresetGraphql =
      skuHhh234WxGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

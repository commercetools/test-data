import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxBlue from './sku-hhh-234-wx-blue';

describe(`with skuHhh234WxBlue preset`, () => {
  it(`should return a skuHhh234WxBlue preset`, () => {
    const skuHhh234WxBluePreset =
      skuHhh234WxBlue().build<TInventoryEntryDraft>();
    expect(skuHhh234WxBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxBlue preset when built for graphql`, () => {
    const skuHhh234WxBluePresetGraphql =
      skuHhh234WxBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

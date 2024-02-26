import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxBlue from './sku-bbb-234-wx-blue';

describe(`with skuBbb234WxBlue preset`, () => {
  it(`should return a skuBbb234WxBlue preset`, () => {
    const skuBbb234WxBluePreset =
      skuBbb234WxBlue().build<TInventoryEntryDraft>();
    expect(skuBbb234WxBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxBlue preset when built for graphql`, () => {
    const skuBbb234WxBluePresetGraphql =
      skuBbb234WxBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxBlue from './sku-vv-234-wx-blue';

describe(`with skuVv234WxBlue preset`, () => {
  it(`should return a skuVv234WxBlue preset`, () => {
    const skuVv234WxBluePreset = skuVv234WxBlue().build<TInventoryEntryDraft>();
    expect(skuVv234WxBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxBlue preset when built for graphql`, () => {
    const skuVv234WxBluePresetGraphql =
      skuVv234WxBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

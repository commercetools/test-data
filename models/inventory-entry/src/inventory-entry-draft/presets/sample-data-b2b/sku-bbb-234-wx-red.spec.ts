import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxRed from './sku-bbb-234-wx-red';

describe(`with skuBbb234WxRed preset`, () => {
  it(`should return a skuBbb234WxRed preset`, () => {
    const skuBbb234WxRedPreset = skuBbb234WxRed().build<TInventoryEntryDraft>();
    expect(skuBbb234WxRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxRed preset when built for graphql`, () => {
    const skuBbb234WxRedPresetGraphql =
      skuBbb234WxRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

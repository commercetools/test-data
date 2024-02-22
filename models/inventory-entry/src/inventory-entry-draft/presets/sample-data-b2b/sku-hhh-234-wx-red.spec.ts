import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxRed from './sku-hhh-234-wx-red';

describe(`with skuHhh234WxRed preset`, () => {
  it(`should return a skuHhh234WxRed preset`, () => {
    const skuHhh234WxRedPreset = skuHhh234WxRed().build<TInventoryEntryDraft>();
    expect(skuHhh234WxRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxRed preset when built for graphql`, () => {
    const skuHhh234WxRedPresetGraphql =
      skuHhh234WxRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

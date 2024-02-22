import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxRed from './sku-vv-234-wx-red';

describe(`with skuVv234WxRed preset`, () => {
  it(`should return a skuVv234WxRed preset`, () => {
    const skuVv234WxRedPreset = skuVv234WxRed().build<TInventoryEntryDraft>();
    expect(skuVv234WxRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxRed preset when built for graphql`, () => {
    const skuVv234WxRedPresetGraphql =
      skuVv234WxRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

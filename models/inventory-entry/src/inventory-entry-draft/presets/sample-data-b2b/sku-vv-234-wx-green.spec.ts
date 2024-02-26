import type { TInventoryEntryDraft } from '../../../types';
import skuVv234WxGreen from './sku-vv-234-wx-green';

describe(`with skuVv234WxGreen preset`, () => {
  it(`should return a skuVv234WxGreen preset`, () => {
    const skuVv234WxGreenPreset =
      skuVv234WxGreen().build<TInventoryEntryDraft>();
    expect(skuVv234WxGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVv234WxGreen preset when built for graphql`, () => {
    const skuVv234WxGreenPresetGraphql =
      skuVv234WxGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuVv234WxGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "vv234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

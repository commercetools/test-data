import type { TInventoryEntryDraft } from '../../../types';
import skuBbb234WxGreen from './sku-bbb-234-wx-green';

describe(`with skuBbb234WxGreen preset`, () => {
  it(`should return a skuBbb234WxGreen preset`, () => {
    const skuBbb234WxGreenPreset =
      skuBbb234WxGreen().build<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBbb234WxGreen preset when built for graphql`, () => {
    const skuBbb234WxGreenPresetGraphql =
      skuBbb234WxGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuBbb234WxGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuHhh234WxGreen from './sku-hhh-234-wx-green';

describe(`with skuHhh234WxGreen preset`, () => {
  it(`should return a skuHhh234WxGreen preset`, () => {
    const skuHhh234WxGreenPreset =
      skuHhh234WxGreen().build<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHhh234WxGreen preset when built for graphql`, () => {
    const skuHhh234WxGreenPresetGraphql =
      skuHhh234WxGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuHhh234WxGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

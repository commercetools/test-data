import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvBlue from './sku-uu-789-uv-blue';

describe(`with skuUu789UvBlue preset`, () => {
  it(`should return a skuUu789UvBlue preset`, () => {
    const skuUu789UvBluePreset = skuUu789UvBlue().build<TInventoryEntryDraft>();
    expect(skuUu789UvBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvBlue preset when built for graphql`, () => {
    const skuUu789UvBluePresetGraphql =
      skuUu789UvBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

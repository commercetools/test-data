import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvRed from './sku-uu-789-uv-red';

describe(`with skuUu789UvRed preset`, () => {
  it(`should return a skuUu789UvRed preset`, () => {
    const skuUu789UvRedPreset = skuUu789UvRed().build<TInventoryEntryDraft>();
    expect(skuUu789UvRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvRed preset when built for graphql`, () => {
    const skuUu789UvRedPresetGraphql =
      skuUu789UvRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

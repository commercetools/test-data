import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvRed from './sku-ggg-789-uv-red';

describe(`with skuGgg789UvRed preset`, () => {
  it(`should return a skuGgg789UvRed preset`, () => {
    const skuGgg789UvRedPreset = skuGgg789UvRed().build<TInventoryEntryDraft>();
    expect(skuGgg789UvRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvRed preset when built for graphql`, () => {
    const skuGgg789UvRedPresetGraphql =
      skuGgg789UvRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

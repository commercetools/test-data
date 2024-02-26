import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvBlue from './sku-ggg-789-uv-blue';

describe(`with skuGgg789UvBlue preset`, () => {
  it(`should return a skuGgg789UvBlue preset`, () => {
    const skuGgg789UvBluePreset =
      skuGgg789UvBlue().build<TInventoryEntryDraft>();
    expect(skuGgg789UvBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvBlue preset when built for graphql`, () => {
    const skuGgg789UvBluePresetGraphql =
      skuGgg789UvBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

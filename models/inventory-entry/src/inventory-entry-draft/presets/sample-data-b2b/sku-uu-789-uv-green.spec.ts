import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvGreen from './sku-uu-789-uv-green';

describe(`with skuUu789UvGreen preset`, () => {
  it(`should return a skuUu789UvGreen preset`, () => {
    const skuUu789UvGreenPreset =
      skuUu789UvGreen().build<TInventoryEntryDraft>();
    expect(skuUu789UvGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuUu789UvGreen preset when built for graphql`, () => {
    const skuUu789UvGreenPresetGraphql =
      skuUu789UvGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

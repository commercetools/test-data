import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvGreen from './sku-ggg-789-uv-green';

describe(`with skuGgg789UvGreen preset`, () => {
  it(`should return a skuGgg789UvGreen preset`, () => {
    const skuGgg789UvGreenPreset =
      skuGgg789UvGreen().build<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvGreen preset when built for graphql`, () => {
    const skuGgg789UvGreenPresetGraphql =
      skuGgg789UvGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

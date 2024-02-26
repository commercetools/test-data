import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvGreen from './sku-aaa-789-uv-green';

describe(`with skuAaa789UvGreen preset`, () => {
  it(`should return a skuAaa789UvGreen preset`, () => {
    const skuAaa789UvGreenPreset =
      skuAaa789UvGreen().build<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvGreen preset when built for graphql`, () => {
    const skuAaa789UvGreenPresetGraphql =
      skuAaa789UvGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

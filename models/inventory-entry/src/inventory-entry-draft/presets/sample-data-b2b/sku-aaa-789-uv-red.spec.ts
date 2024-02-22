import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvRed from './sku-aaa-789-uv-red';

describe(`with skuAaa789UvRed preset`, () => {
  it(`should return a skuAaa789UvRed preset`, () => {
    const skuAaa789UvRedPreset = skuAaa789UvRed().build<TInventoryEntryDraft>();
    expect(skuAaa789UvRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvRed preset when built for graphql`, () => {
    const skuAaa789UvRedPresetGraphql =
      skuAaa789UvRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

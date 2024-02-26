import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvBlue from './sku-aaa-789-uv-blue';

describe(`with skuAaa789UvBlue preset`, () => {
  it(`should return a skuAaa789UvBlue preset`, () => {
    const skuAaa789UvBluePreset =
      skuAaa789UvBlue().build<TInventoryEntryDraft>();
    expect(skuAaa789UvBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAaa789UvBlue preset when built for graphql`, () => {
    const skuAaa789UvBluePresetGraphql =
      skuAaa789UvBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

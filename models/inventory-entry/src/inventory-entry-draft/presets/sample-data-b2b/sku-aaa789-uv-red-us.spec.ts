import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvRedUs from './sku-aaa789-uv-red-us';

describe(`with skuAaa789UvRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuAaa789UvRedUs preset`, () => {
    const skuAaa789UvRedUsPreset =
      skuAaa789UvRedUs().build<TInventoryEntryDraft>();
    expect(skuAaa789UvRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedUs preset when built for graphql`, () => {
    const skuAaa789UvRedUsPresetGraphql =
      skuAaa789UvRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

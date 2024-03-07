import type { TInventoryEntryDraft } from '../../../types';
import skuAaa789UvBlueUs from './sku-aaa789-uv-blue-us';

describe(`with skuAaa789UvBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuAaa789UvBlueUs preset`, () => {
    const skuAaa789UvBlueUsPreset =
      skuAaa789UvBlueUs().build<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueUs preset when built for graphql`, () => {
    const skuAaa789UvBlueUsPresetGraphql =
      skuAaa789UvBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuAaa789UvBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

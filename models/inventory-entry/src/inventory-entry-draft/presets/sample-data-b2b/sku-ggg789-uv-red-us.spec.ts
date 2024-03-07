import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvRedUs from './sku-ggg789-uv-red-us';

describe(`with skuGgg789UvRedUs preset and us-warehouse channel`, () => {
  it(`should return a skuGgg789UvRedUs preset`, () => {
    const skuGgg789UvRedUsPreset =
      skuGgg789UvRedUs().build<TInventoryEntryDraft>();
    expect(skuGgg789UvRedUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvRedUs preset when built for graphql`, () => {
    const skuGgg789UvRedUsPresetGraphql =
      skuGgg789UvRedUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvRedUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

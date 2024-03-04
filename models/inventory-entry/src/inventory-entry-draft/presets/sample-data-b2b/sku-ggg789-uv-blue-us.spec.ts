import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvBlueUs from './sku-ggg789-uv-blue-us';

describe(`with skuGgg789UvBlueUs preset and us-warehouse channel`, () => {
  it(`should return a skuGgg789UvBlueUs preset`, () => {
    const skuGgg789UvBlueUsPreset =
      skuGgg789UvBlueUs().build<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvBlueUs preset when built for graphql`, () => {
    const skuGgg789UvBlueUsPresetGraphql =
      skuGgg789UvBlueUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

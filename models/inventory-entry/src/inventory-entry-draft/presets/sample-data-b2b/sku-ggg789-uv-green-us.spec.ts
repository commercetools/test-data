import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvGreenUs from './sku-ggg789-uv-green-us';

describe(`with skuGgg789UvGreenUs preset and us-warehouse channel`, () => {
  it(`should return a skuGgg789UvGreenUs preset`, () => {
    const skuGgg789UvGreenUsPreset =
      skuGgg789UvGreenUs().build<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvGreenUs preset when built for graphql`, () => {
    const skuGgg789UvGreenUsPresetGraphql =
      skuGgg789UvGreenUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

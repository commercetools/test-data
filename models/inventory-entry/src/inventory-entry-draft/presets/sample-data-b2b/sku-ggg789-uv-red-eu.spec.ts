import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvRedEu from './sku-ggg789-uv-red-eu';

describe(`with skuGgg789UvRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuGgg789UvRedEu preset`, () => {
    const skuGgg789UvRedEuPreset =
      skuGgg789UvRedEu().build<TInventoryEntryDraft>();
    expect(skuGgg789UvRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvRedEu preset when built for graphql`, () => {
    const skuGgg789UvRedEuPresetGraphql =
      skuGgg789UvRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

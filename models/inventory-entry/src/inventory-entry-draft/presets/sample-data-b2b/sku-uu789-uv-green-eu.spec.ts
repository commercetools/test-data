import type { TInventoryEntryDraft } from '../../../types';
import skuUu789UvGreenEu from './sku-uu789-uv-green-eu';

describe(`with skuUu789UvGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuUu789UvGreenEu preset`, () => {
    const skuUu789UvGreenEuPreset =
      skuUu789UvGreenEu().build<TInventoryEntryDraft>();
    expect(skuUu789UvGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvGreenEu preset when built for graphql`, () => {
    const skuUu789UvGreenEuPresetGraphql =
      skuUu789UvGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuUu789UvGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

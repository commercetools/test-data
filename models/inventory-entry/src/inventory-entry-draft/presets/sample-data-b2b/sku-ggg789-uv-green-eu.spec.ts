import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvGreenEu from './sku-ggg789-uv-green-eu';

describe(`with skuGgg789UvGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuGgg789UvGreenEu preset`, () => {
    const skuGgg789UvGreenEuPreset =
      skuGgg789UvGreenEu().build<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvGreenEu preset when built for graphql`, () => {
    const skuGgg789UvGreenEuPresetGraphql =
      skuGgg789UvGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

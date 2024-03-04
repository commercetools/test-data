import type { TInventoryEntryDraft } from '../../../types';
import skuGgg789UvBlueEu from './sku-ggg789-uv-blue-eu';

describe(`with skuGgg789UvBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuGgg789UvBlueEu preset`, () => {
    const skuGgg789UvBlueEuPreset =
      skuGgg789UvBlueEu().build<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGgg789UvBlueEu preset when built for graphql`, () => {
    const skuGgg789UvBlueEuPresetGraphql =
      skuGgg789UvBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGgg789UvBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

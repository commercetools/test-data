import type { TInventoryEntryDraft } from '../../../types';
import skuDdd890OpGreenEu from './sku-ddd890-op-green-eu';

describe(`with skuDdd890OpGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuDdd890OpGreenEu preset`, () => {
    const skuDdd890OpGreenEuPreset =
      skuDdd890OpGreenEu().build<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDdd890OpGreenEu preset when built for graphql`, () => {
    const skuDdd890OpGreenEuPresetGraphql =
      skuDdd890OpGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuDdd890OpGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

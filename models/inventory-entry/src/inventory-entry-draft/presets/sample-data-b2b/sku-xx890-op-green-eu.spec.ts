import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpGreenEu from './sku-xx890-op-green-eu';

describe(`with skuXx890OpGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuXx890OpGreenEu preset`, () => {
    const skuXx890OpGreenEuPreset =
      skuXx890OpGreenEu().build<TInventoryEntryDraft>();
    expect(skuXx890OpGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpGreenEu preset when built for graphql`, () => {
    const skuXx890OpGreenEuPresetGraphql =
      skuXx890OpGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

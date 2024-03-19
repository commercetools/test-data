import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpGreenEu from './sku-jjj890-op-green-eu';

describe(`with skuJjj890OpGreenEu preset and eu-warehouse channel`, () => {
  it(`should return a skuJjj890OpGreenEu preset`, () => {
    const skuJjj890OpGreenEuPreset =
      skuJjj890OpGreenEu().build<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenEu preset when built for graphql`, () => {
    const skuJjj890OpGreenEuPresetGraphql =
      skuJjj890OpGreenEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpGreenEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

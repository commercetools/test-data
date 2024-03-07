import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StBlueEu from './sku-tt456-st-blue-eu';

describe(`with skuTt456StBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuTt456StBlueEu preset`, () => {
    const skuTt456StBlueEuPreset =
      skuTt456StBlueEu().build<TInventoryEntryDraft>();
    expect(skuTt456StBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTt456StBlueEu preset when built for graphql`, () => {
    const skuTt456StBlueEuPresetGraphql =
      skuTt456StBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

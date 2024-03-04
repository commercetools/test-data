import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StBlueEu from './sku-fff456-st-blue-eu';

describe(`with skuFff456StBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuFff456StBlueEu preset`, () => {
    const skuFff456StBlueEuPreset =
      skuFff456StBlueEu().build<TInventoryEntryDraft>();
    expect(skuFff456StBlueEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueEu preset when built for graphql`, () => {
    const skuFff456StBlueEuPresetGraphql =
      skuFff456StBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

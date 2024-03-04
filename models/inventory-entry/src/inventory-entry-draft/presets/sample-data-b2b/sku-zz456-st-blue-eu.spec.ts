import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StBlueEu from './sku-zz456-st-blue-eu';

describe(`with skuZz456StBlueEu preset and eu-warehouse channel`, () => {
  it(`should return a skuZz456StBlueEu preset`, () => {
    const skuZz456StBlueEuPreset =
      skuZz456StBlueEu().build<TInventoryEntryDraft>();
    expect(skuZz456StBlueEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZz456StBlueEu preset when built for graphql`, () => {
    const skuZz456StBlueEuPresetGraphql =
      skuZz456StBlueEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StBlueEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

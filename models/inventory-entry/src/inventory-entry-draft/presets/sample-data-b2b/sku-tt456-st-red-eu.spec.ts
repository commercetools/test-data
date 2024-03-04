import type { TInventoryEntryDraft } from '../../../types';
import skuTt456StRedEu from './sku-tt456-st-red-eu';

describe(`with skuTt456StRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuTt456StRedEu preset`, () => {
    const skuTt456StRedEuPreset =
      skuTt456StRedEu().build<TInventoryEntryDraft>();
    expect(skuTt456StRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTt456StRedEu preset when built for graphql`, () => {
    const skuTt456StRedEuPresetGraphql =
      skuTt456StRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuTt456StRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tt456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tt456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

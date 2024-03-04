import type { TInventoryEntryDraft } from '../../../types';
import skuFff456StRedEu from './sku-fff456-st-red-eu';

describe(`with skuFff456StRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuFff456StRedEu preset`, () => {
    const skuFff456StRedEuPreset =
      skuFff456StRedEu().build<TInventoryEntryDraft>();
    expect(skuFff456StRedEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFff456StRedEu preset when built for graphql`, () => {
    const skuFff456StRedEuPresetGraphql =
      skuFff456StRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFff456StRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

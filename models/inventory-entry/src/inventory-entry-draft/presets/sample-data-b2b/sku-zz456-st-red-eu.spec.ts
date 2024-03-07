import type { TInventoryEntryDraft } from '../../../types';
import skuZz456StRedEu from './sku-zz456-st-red-eu';

describe(`with skuZz456StRedEu preset and eu-warehouse channel`, () => {
  it(`should return a skuZz456StRedEu preset`, () => {
    const skuZz456StRedEuPreset =
      skuZz456StRedEu().build<TInventoryEntryDraft>();
    expect(skuZz456StRedEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StRedEu preset when built for graphql`, () => {
    const skuZz456StRedEuPresetGraphql =
      skuZz456StRedEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZz456StRedEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

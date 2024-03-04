import type { TInventoryEntryDraft } from '../../../types';
import skuFuelFilterEu from './sku-fuel-filter-eu';

describe(`with skuFuelFilterEu preset and eu-warehouse channel`, () => {
  it(`should return a skuFuelFilterEu preset`, () => {
    const skuFuelFilterEuPreset =
      skuFuelFilterEu().build<TInventoryEntryDraft>();
    expect(skuFuelFilterEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFuelFilterEu preset when built for graphql`, () => {
    const skuFuelFilterEuPresetGraphql =
      skuFuelFilterEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFuelFilterEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

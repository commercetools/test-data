import type { TInventoryEntryDraft } from '../../../types';
import skuFuelFilterUs from './sku-fuel-filter-us';

describe(`with skuFuelFilterUs preset and us-warehouse channel`, () => {
  it(`should return a skuFuelFilterUs preset`, () => {
    const skuFuelFilterUsPreset =
      skuFuelFilterUs().build<TInventoryEntryDraft>();
    expect(skuFuelFilterUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFuelFilterUs preset when built for graphql`, () => {
    const skuFuelFilterUsPresetGraphql =
      skuFuelFilterUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuFuelFilterUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

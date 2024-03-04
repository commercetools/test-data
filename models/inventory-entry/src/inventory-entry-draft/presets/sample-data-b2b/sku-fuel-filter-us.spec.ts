import type { TInventoryEntryDraft } from '../../../types';
import skuFuelFilterUs from './sku-fuel-filter-us';

describe(`with skuFuelFilterUs preset and us-warehouse channel`, () => {
  it(`should return a skuFuelFilterUs preset`, () => {
    const skuFuelFilterUsPreset =
      skuFuelFilterUs().build<TInventoryEntryDraft>();
    expect(skuFuelFilterUsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFuelFilterUs preset when built for graphql`, () => {
    const skuFuelFilterUsPresetGraphql =
      skuFuelFilterUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuFuelFilterUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": undefined,
      }
    `);
  });
});

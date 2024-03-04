import type { TInventoryEntryDraft } from '../../../types';
import skuFuelFilterDefault from './sku-fuel-filter-default';

describe(`with skuFuelFilterDefault preset and default-warehouse channel`, () => {
  it(`should return a skuFuelFilterDefault preset`, () => {
    const skuFuelFilterDefaultPreset =
      skuFuelFilterDefault().build<TInventoryEntryDraft>();
    expect(skuFuelFilterDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFuelFilterDefault preset when built for graphql`, () => {
    const skuFuelFilterDefaultPresetGraphql =
      skuFuelFilterDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuFuelFilterDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fuel-filter-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "fuel-filter",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

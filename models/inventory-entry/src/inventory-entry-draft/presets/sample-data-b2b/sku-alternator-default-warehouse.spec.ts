import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-alternator-default-warehouse';

describe(`with skuAlternatorDefaultWarehouse preset`, () => {
  it(`should return a skuAlternatorDefaultWarehouse preset when built for rest`, () => {
    const skuAlternatorDefaultWarehousePreset = presets.restPreset().build();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for graphql`, () => {
    const skuAlternatorDefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAlternatorDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAlternatorDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAlternatorDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlternatorDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

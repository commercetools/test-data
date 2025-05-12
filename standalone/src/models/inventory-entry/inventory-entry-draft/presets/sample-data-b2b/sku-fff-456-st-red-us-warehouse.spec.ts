import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-fff-456-st-red-us-warehouse';

describe(`with skuFff456StRedUsWarehouse preset`, () => {
  it(`should return a skuFff456StRedUsWarehouse preset when built for rest`, () => {
    const skuFff456StRedUsWarehousePreset = presets.restPreset().build();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for graphql`, () => {
    const skuFff456StRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

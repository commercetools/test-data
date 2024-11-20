import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-fff-456-st-blue-us-warehouse';

describe(`with skuFff456StBlueUsWarehouse preset`, () => {
  it(`should return a skuFff456StBlueUsWarehouse preset when built for rest`, () => {
    const skuFff456StBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for graphql`, () => {
    const skuFff456StBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

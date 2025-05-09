import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-starter-motor-us-warehouse';

describe(`with skuStarterMotorUsWarehouse preset`, () => {
  it(`should return a skuStarterMotorUsWarehouse preset when built for rest`, () => {
    const skuStarterMotorUsWarehousePreset = presets.restPreset().build();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for graphql`, () => {
    const skuStarterMotorUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for legacy rest`, () => {
    const skuStarterMotorUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for legacy graphql`, () => {
    const skuStarterMotorUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

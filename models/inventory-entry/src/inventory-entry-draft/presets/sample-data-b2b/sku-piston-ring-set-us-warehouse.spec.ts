import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-piston-ring-set-us-warehouse';

describe(`with skuPistonRingSetUsWarehouse preset`, () => {
  it(`should return a skuPistonRingSetUsWarehouse preset when built for rest`, () => {
    const skuPistonRingSetUsWarehousePreset = presets.restPreset().build();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for graphql`, () => {
    const skuPistonRingSetUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for legacy rest`, () => {
    const skuPistonRingSetUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetUsWarehouse preset when built for legacy graphql`, () => {
    const skuPistonRingSetUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPistonRingSetUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

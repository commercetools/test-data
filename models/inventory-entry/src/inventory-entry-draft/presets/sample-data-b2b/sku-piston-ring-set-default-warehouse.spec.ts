import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-piston-ring-set-default-warehouse';

describe(`with skuPistonRingSetDefaultWarehouse preset`, () => {
  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for rest`, () => {
    const skuPistonRingSetDefaultWarehousePreset = presets.restPreset().build();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for graphql`, () => {
    const skuPistonRingSetDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for legacy rest`, () => {
    const skuPistonRingSetDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPistonRingSetDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPistonRingSetDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPistonRingSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "piston-ring-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "piston-ring-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

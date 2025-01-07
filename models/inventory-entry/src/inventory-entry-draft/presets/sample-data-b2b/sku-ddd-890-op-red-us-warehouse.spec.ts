import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ddd-890-op-red-us-warehouse';

describe(`with skuDdd890OpRedUsWarehouse preset`, () => {
  it(`should return a skuDdd890OpRedUsWarehouse preset when built for rest`, () => {
    const skuDdd890OpRedUsWarehousePreset = presets.restPreset().build();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for graphql`, () => {
    const skuDdd890OpRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDdd890OpRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ddd890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ddd890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

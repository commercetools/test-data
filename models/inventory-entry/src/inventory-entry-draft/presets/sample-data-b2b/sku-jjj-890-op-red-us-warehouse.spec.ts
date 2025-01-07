import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jjj-890-op-red-us-warehouse';

describe(`with skuJjj890OpRedUsWarehouse preset`, () => {
  it(`should return a skuJjj890OpRedUsWarehouse preset when built for rest`, () => {
    const skuJjj890OpRedUsWarehousePreset = presets.restPreset().build();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for graphql`, () => {
    const skuJjj890OpRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

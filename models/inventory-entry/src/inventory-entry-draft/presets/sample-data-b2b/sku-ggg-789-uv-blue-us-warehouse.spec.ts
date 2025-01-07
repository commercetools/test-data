import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ggg-789-uv-blue-us-warehouse';

describe(`with skuGgg789UvBlueUsWarehouse preset`, () => {
  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for rest`, () => {
    const skuGgg789UvBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for graphql`, () => {
    const skuGgg789UvBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

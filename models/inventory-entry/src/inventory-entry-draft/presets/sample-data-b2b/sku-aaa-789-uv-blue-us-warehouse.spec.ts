import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aaa-789-uv-blue-us-warehouse';

describe(`with skuAaa789UvBlueUsWarehouse preset`, () => {
  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for rest`, () => {
    const skuAaa789UvBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for graphql`, () => {
    const skuAaa789UvBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

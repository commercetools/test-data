import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aaa-789-uv-red-us-warehouse';

describe(`with skuAaa789UvRedUsWarehouse preset`, () => {
  it(`should return a skuAaa789UvRedUsWarehouse preset when built for rest`, () => {
    const skuAaa789UvRedUsWarehousePreset = presets.restPreset().build();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for graphql`, () => {
    const skuAaa789UvRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aaa-789-uv-blue-eu-warehouse';

describe(`with skuAaa789UvBlueEuWarehouse preset`, () => {
  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for rest`, () => {
    const skuAaa789UvBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for graphql`, () => {
    const skuAaa789UvBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

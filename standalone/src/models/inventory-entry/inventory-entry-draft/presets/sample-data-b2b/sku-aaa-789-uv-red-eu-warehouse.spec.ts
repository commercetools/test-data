import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aaa-789-uv-red-eu-warehouse';

describe(`with skuAaa789UvRedEuWarehouse preset`, () => {
  it(`should return a skuAaa789UvRedEuWarehouse preset when built for rest`, () => {
    const skuAaa789UvRedEuWarehousePreset = presets.restPreset().build();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for graphql`, () => {
    const skuAaa789UvRedEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvRedEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvRedEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

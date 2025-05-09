import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ggg-789-uv-red-eu-warehouse';

describe(`with skuGgg789UvRedEuWarehouse preset`, () => {
  it(`should return a skuGgg789UvRedEuWarehouse preset when built for rest`, () => {
    const skuGgg789UvRedEuWarehousePreset = presets.restPreset().build();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for graphql`, () => {
    const skuGgg789UvRedEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvRedEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvRedEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

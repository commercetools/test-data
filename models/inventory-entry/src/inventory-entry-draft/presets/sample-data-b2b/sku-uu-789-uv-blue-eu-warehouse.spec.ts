import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-uu-789-uv-blue-eu-warehouse';

describe(`with skuUu789UvBlueEuWarehouse preset`, () => {
  it(`should return a skuUu789UvBlueEuWarehouse preset when built for rest`, () => {
    const skuUu789UvBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for graphql`, () => {
    const skuUu789UvBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "uu789-uv-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "uu789-uv-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

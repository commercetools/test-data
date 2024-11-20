import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ggg-789-uv-green-eu-warehouse';

describe(`with skuGgg789UvGreenEuWarehouse preset`, () => {
  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for rest`, () => {
    const skuGgg789UvGreenEuWarehousePreset = presets.restPreset().build();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for graphql`, () => {
    const skuGgg789UvGreenEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvGreenEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGgg789UvGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvGreenEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ggg789-uv-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ggg789-uv-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

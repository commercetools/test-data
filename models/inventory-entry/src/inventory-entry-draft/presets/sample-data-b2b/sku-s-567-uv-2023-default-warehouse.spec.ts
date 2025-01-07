import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-s-567-uv-2023-default-warehouse';

describe(`with skuS567Uv2023DefaultWarehouse preset`, () => {
  it(`should return a skuS567Uv2023DefaultWarehouse preset when built for rest`, () => {
    const skuS567Uv2023DefaultWarehousePreset = presets.restPreset().build();
    expect(skuS567Uv2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2023DefaultWarehouse preset when built for graphql`, () => {
    const skuS567Uv2023DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuS567Uv2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuS567Uv2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuS567Uv2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuS567Uv2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuS567Uv2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

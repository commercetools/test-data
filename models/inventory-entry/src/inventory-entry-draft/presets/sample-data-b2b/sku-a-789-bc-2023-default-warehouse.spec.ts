import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-a-789-bc-2023-default-warehouse';

describe(`with skuA789Bc2023DefaultWarehouse preset`, () => {
  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for rest`, () => {
    const skuA789Bc2023DefaultWarehousePreset = presets.restPreset().build();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for graphql`, () => {
    const skuA789Bc2023DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "a789-bc-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "a789-bc-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

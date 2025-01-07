import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-xx-890-op-red-default-warehouse';

describe(`with skuXx890OpRedDefaultWarehouse preset`, () => {
  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for rest`, () => {
    const skuXx890OpRedDefaultWarehousePreset = presets.restPreset().build();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for graphql`, () => {
    const skuXx890OpRedDefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpRedDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpRedDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-xx-890-op-blue-us-warehouse';

describe(`with skuXx890OpBlueUsWarehouse preset`, () => {
  it(`should return a skuXx890OpBlueUsWarehouse preset when built for rest`, () => {
    const skuXx890OpBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for graphql`, () => {
    const skuXx890OpBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

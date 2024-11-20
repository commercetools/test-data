import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-zz-456-st-blue-us-warehouse';

describe(`with skuZz456StBlueUsWarehouse preset`, () => {
  it(`should return a skuZz456StBlueUsWarehouse preset when built for rest`, () => {
    const skuZz456StBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for graphql`, () => {
    const skuZz456StBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-zz-456-st-red-us-warehouse';

describe(`with skuZz456StRedUsWarehouse preset`, () => {
  it(`should return a skuZz456StRedUsWarehouse preset when built for rest`, () => {
    const skuZz456StRedUsWarehousePreset = presets.restPreset().build();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for graphql`, () => {
    const skuZz456StRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

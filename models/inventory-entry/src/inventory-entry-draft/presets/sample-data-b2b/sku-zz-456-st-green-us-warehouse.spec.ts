import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-zz-456-st-green-us-warehouse';

describe(`with skuZz456StGreenUsWarehouse preset`, () => {
  it(`should return a skuZz456StGreenUsWarehouse preset when built for rest`, () => {
    const skuZz456StGreenUsWarehousePreset = presets.restPreset().build();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for graphql`, () => {
    const skuZz456StGreenUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuZz456StGreenUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZz456StGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuZz456StGreenUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZz456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "zz456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "zz456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

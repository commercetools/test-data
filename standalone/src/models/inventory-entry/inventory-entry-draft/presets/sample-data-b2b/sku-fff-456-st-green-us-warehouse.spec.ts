import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-fff-456-st-green-us-warehouse';

describe(`with skuFff456StGreenUsWarehouse preset`, () => {
  it(`should return a skuFff456StGreenUsWarehouse preset when built for rest`, () => {
    const skuFff456StGreenUsWarehousePreset = presets.restPreset().build();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for graphql`, () => {
    const skuFff456StGreenUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuFff456StGreenUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFff456StGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuFff456StGreenUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFff456StGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "fff456-st-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "fff456-st-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

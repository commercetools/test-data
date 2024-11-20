import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hydraulic-hose-eu-warehouse';

describe(`with skuHydraulicHoseEuWarehouse preset`, () => {
  it(`should return a skuHydraulicHoseEuWarehouse preset when built for rest`, () => {
    const skuHydraulicHoseEuWarehousePreset = presets.restPreset().build();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for graphql`, () => {
    const skuHydraulicHoseEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for legacy rest`, () => {
    const skuHydraulicHoseEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHydraulicHoseEuWarehouse preset when built for legacy graphql`, () => {
    const skuHydraulicHoseEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHydraulicHoseEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hydraulic-hose-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hydraulic-hose",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

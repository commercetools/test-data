import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ww-567-yz-blue-eu-warehouse';

describe(`with skuWw567YzBlueEuWarehouse preset`, () => {
  it(`should return a skuWw567YzBlueEuWarehouse preset when built for rest`, () => {
    const skuWw567YzBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for graphql`, () => {
    const skuWw567YzBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuWw567YzBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuWw567YzBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuWw567YzBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWw567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ww567-yz-blue-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ww567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccc-567-yz-blue-eu-warehouse';

describe(`with skuCcc567YzBlueEuWarehouse preset`, () => {
  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for rest`, () => {
    const skuCcc567YzBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for graphql`, () => {
    const skuCcc567YzBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-blue-us-warehouse';

describe(`with skuIii567YzBlueUsWarehouse preset`, () => {
  it(`should return a skuIii567YzBlueUsWarehouse preset when built for rest`, () => {
    const skuIii567YzBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for graphql`, () => {
    const skuIii567YzBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

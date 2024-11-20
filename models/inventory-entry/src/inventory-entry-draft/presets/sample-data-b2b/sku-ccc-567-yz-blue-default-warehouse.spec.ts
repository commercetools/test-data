import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccc-567-yz-blue-default-warehouse';

describe(`with skuCcc567YzBlueDefaultWarehouse preset`, () => {
  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for rest`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = presets.restPreset().build();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

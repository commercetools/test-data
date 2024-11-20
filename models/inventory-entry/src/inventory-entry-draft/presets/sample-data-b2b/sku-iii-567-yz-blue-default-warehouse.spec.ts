import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-blue-default-warehouse';

describe(`with skuIii567YzBlueDefaultWarehouse preset`, () => {
  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for rest`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

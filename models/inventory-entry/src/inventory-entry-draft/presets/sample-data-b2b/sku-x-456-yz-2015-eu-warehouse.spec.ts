import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-x-456-yz-2015-eu-warehouse';

describe(`with skuX456Yz2015EuWarehouse preset`, () => {
  it(`should return a skuX456Yz2015EuWarehouse preset when built for rest`, () => {
    const skuX456Yz2015EuWarehousePreset = presets.restPreset().build();
    expect(skuX456Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuX456Yz2015EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuX456Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuX456Yz2015EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX456Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX456Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuX456Yz2015EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX456Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x456-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x456-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

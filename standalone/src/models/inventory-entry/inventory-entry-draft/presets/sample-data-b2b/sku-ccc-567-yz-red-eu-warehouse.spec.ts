import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccc-567-yz-red-eu-warehouse';

describe(`with skuCcc567YzRedEuWarehouse preset`, () => {
  it(`should return a skuCcc567YzRedEuWarehouse preset when built for rest`, () => {
    const skuCcc567YzRedEuWarehousePreset = presets.restPreset().build();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for graphql`, () => {
    const skuCcc567YzRedEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for legacy rest`, () => {
    const skuCcc567YzRedEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCcc567YzRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuCcc567YzRedEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcc567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ccc567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "ccc567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

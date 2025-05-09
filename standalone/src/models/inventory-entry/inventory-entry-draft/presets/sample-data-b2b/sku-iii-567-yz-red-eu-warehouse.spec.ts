import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-red-eu-warehouse';

describe(`with skuIii567YzRedEuWarehouse preset`, () => {
  it(`should return a skuIii567YzRedEuWarehouse preset when built for rest`, () => {
    const skuIii567YzRedEuWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for graphql`, () => {
    const skuIii567YzRedEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzRedEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzRedEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-green-eu-warehouse';

describe(`with skuIii567YzGreenEuWarehouse preset`, () => {
  it(`should return a skuIii567YzGreenEuWarehouse preset when built for rest`, () => {
    const skuIii567YzGreenEuWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for graphql`, () => {
    const skuIii567YzGreenEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzGreenEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzGreenEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

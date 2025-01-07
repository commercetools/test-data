import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-green-us-warehouse';

describe(`with skuIii567YzGreenUsWarehouse preset`, () => {
  it(`should return a skuIii567YzGreenUsWarehouse preset when built for rest`, () => {
    const skuIii567YzGreenUsWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for graphql`, () => {
    const skuIii567YzGreenUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzGreenUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzGreenUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-green-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

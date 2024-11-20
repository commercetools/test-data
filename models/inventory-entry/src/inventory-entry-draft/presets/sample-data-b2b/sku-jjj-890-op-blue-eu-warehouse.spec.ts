import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jjj-890-op-blue-eu-warehouse';

describe(`with skuJjj890OpBlueEuWarehouse preset`, () => {
  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for rest`, () => {
    const skuJjj890OpBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for graphql`, () => {
    const skuJjj890OpBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

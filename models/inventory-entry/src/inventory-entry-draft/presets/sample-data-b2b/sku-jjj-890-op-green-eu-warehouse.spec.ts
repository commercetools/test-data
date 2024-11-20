import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jjj-890-op-green-eu-warehouse';

describe(`with skuJjj890OpGreenEuWarehouse preset`, () => {
  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for rest`, () => {
    const skuJjj890OpGreenEuWarehousePreset = presets.restPreset().build();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for graphql`, () => {
    const skuJjj890OpGreenEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpGreenEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJjj890OpGreenEuWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpGreenEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpGreenEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jjj890-op-green-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "jjj890-op-green",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

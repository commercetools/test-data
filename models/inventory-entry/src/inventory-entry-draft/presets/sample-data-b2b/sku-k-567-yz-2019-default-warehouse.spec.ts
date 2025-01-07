import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-k-567-yz-2019-default-warehouse';

describe(`with skuK567Yz2019DefaultWarehouse preset`, () => {
  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for rest`, () => {
    const skuK567Yz2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for graphql`, () => {
    const skuK567Yz2019DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

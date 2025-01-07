import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-qq-567-yz-2019-default-warehouse';

describe(`with skuQq567Yz2019DefaultWarehouse preset`, () => {
  it(`should return a skuQq567Yz2019DefaultWarehouse preset when built for rest`, () => {
    const skuQq567Yz2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuQq567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2019DefaultWarehouse preset when built for graphql`, () => {
    const skuQq567Yz2019DefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuQq567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuQq567Yz2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuQq567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuQq567Yz2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuQq567Yz2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuQq567Yz2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "qq567-yz-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "qq567-yz-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

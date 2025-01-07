import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cc-789-uv-2019-default-warehouse';

describe(`with skuCc789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuCc789Uv2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCc789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-i-789-uv-2019-default-warehouse';

describe(`with skuI789Uv2019DefaultWarehouse preset`, () => {
  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for rest`, () => {
    const skuI789Uv2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for graphql`, () => {
    const skuI789Uv2019DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuI789Uv2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuI789Uv2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuI789Uv2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuI789Uv2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

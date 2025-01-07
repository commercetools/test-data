import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-r-123-ts-2015-default-warehouse';

describe(`with skuR123Ts2015DefaultWarehouse preset`, () => {
  it(`should return a skuR123Ts2015DefaultWarehouse preset when built for rest`, () => {
    const skuR123Ts2015DefaultWarehousePreset = presets.restPreset().build();
    expect(skuR123Ts2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2015DefaultWarehouse preset when built for graphql`, () => {
    const skuR123Ts2015DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuR123Ts2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2015DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2015DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

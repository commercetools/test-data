import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-r-123-ts-2019-us-warehouse';

describe(`with skuR123Ts2019UsWarehouse preset`, () => {
  it(`should return a skuR123Ts2019UsWarehouse preset when built for rest`, () => {
    const skuR123Ts2019UsWarehousePreset = presets.restPreset().build();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for graphql`, () => {
    const skuR123Ts2019UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for legacy rest`, () => {
    const skuR123Ts2019UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuR123Ts2019UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuR123Ts2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
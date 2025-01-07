import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pp-234-wx-2019-default-warehouse';

describe(`with skuPp234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPp234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPp234Wx2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPp234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

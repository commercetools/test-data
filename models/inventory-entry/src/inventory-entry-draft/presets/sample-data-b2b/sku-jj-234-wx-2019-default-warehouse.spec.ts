import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jj-234-wx-2019-default-warehouse';

describe(`with skuJj234Wx2019DefaultWarehouse preset`, () => {
  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for rest`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = presets.restPreset().build();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2019DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2019DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
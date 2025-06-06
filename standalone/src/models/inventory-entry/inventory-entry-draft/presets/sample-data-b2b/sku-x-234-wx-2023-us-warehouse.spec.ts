import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-x-234-wx-2023-us-warehouse';

describe(`with skuX234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuX234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuX234Wx2023UsWarehousePreset = presets.restPreset().build();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuX234Wx2023UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuX234Wx2023UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuX234Wx2023UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuX234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-j-234-wx-2023-us-warehouse';

describe(`with skuJ234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuJ234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuJ234Wx2023UsWarehousePreset = presets.restPreset().build();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2023UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2023UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2023UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
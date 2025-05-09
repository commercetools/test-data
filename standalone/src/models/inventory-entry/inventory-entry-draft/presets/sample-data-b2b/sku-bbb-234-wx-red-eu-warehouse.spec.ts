import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bbb-234-wx-red-eu-warehouse';

describe(`with skuBbb234WxRedEuWarehouse preset`, () => {
  it(`should return a skuBbb234WxRedEuWarehouse preset when built for rest`, () => {
    const skuBbb234WxRedEuWarehousePreset = presets.restPreset().build();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for graphql`, () => {
    const skuBbb234WxRedEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxRedEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxRedEuWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxRedEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxRedEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-red-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-red",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

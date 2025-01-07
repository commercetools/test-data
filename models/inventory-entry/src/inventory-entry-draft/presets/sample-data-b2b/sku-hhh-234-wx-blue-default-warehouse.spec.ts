import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hhh-234-wx-blue-default-warehouse';

describe(`with skuHhh234WxBlueDefaultWarehouse preset`, () => {
  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for rest`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = presets.restPreset().build();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

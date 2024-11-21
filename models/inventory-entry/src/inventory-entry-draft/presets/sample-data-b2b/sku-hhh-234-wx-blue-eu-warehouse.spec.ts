import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hhh-234-wx-blue-eu-warehouse';

describe(`with skuHhh234WxBlueEuWarehouse preset`, () => {
  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for rest`, () => {
    const skuHhh234WxBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for graphql`, () => {
    const skuHhh234WxBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuHhh234WxBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHhh234WxBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuHhh234WxBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHhh234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hhh234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "hhh234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

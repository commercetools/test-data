import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bbb-234-wx-blue-eu-warehouse';

describe(`with skuBbb234WxBlueEuWarehouse preset`, () => {
  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for rest`, () => {
    const skuBbb234WxBlueEuWarehousePreset = presets.restPreset().build();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for graphql`, () => {
    const skuBbb234WxBlueEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxBlueEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxBlueEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxBlueEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-eu-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

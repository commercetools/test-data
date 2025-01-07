import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bbb-234-wx-blue-us-warehouse';

describe(`with skuBbb234WxBlueUsWarehouse preset`, () => {
  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for rest`, () => {
    const skuBbb234WxBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for graphql`, () => {
    const skuBbb234WxBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-blue-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

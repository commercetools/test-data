import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bbb-234-wx-green-default-warehouse';

describe(`with skuBbb234WxGreenDefaultWarehouse preset`, () => {
  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for rest`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = presets.restPreset().build();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBbb234WxGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBbb234WxGreenDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBbb234WxGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bbb234-wx-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bbb234-wx-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

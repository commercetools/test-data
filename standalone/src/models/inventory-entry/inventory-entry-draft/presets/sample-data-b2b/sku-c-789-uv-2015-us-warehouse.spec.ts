import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-c-789-uv-2015-us-warehouse';

describe(`with skuC789Uv2015UsWarehouse preset`, () => {
  it(`should return a skuC789Uv2015UsWarehouse preset when built for rest`, () => {
    const skuC789Uv2015UsWarehousePreset = presets.restPreset().build();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for graphql`, () => {
    const skuC789Uv2015UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2015UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2015UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

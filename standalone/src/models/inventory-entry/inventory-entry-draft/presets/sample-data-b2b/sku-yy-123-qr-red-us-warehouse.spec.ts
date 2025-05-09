import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-yy-123-qr-red-us-warehouse';

describe(`with skuYy123QrRedUsWarehouse preset`, () => {
  it(`should return a skuYy123QrRedUsWarehouse preset when built for rest`, () => {
    const skuYy123QrRedUsWarehousePreset = presets.restPreset().build();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

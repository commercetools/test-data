import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-yy-123-qr-blue-us-warehouse';

describe(`with skuYy123QrBlueUsWarehouse preset`, () => {
  it(`should return a skuYy123QrBlueUsWarehouse preset when built for rest`, () => {
    const skuYy123QrBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

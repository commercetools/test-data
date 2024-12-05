import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-yy-123-qr-green-us-warehouse';

describe(`with skuYy123QrGreenUsWarehouse preset`, () => {
  it(`should return a skuYy123QrGreenUsWarehouse preset when built for rest`, () => {
    const skuYy123QrGreenUsWarehousePreset = presets.restPreset().build();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for graphql`, () => {
    const skuYy123QrGreenUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrGreenUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrGreenUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "yy123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

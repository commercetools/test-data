import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-yy-123-qr-blue-default-warehouse';

describe(`with skuYy123QrBlueDefaultWarehouse preset`, () => {
  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for rest`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = presets.restPreset().build();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuYy123QrBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuYy123QrBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuYy123QrBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "yy123-qr-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "yy123-qr-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

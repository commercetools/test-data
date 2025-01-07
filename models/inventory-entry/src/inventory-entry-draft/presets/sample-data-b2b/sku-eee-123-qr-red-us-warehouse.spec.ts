import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-eee-123-qr-red-us-warehouse';

describe(`with skuEee123QrRedUsWarehouse preset`, () => {
  it(`should return a skuEee123QrRedUsWarehouse preset when built for rest`, () => {
    const skuEee123QrRedUsWarehousePreset = presets.restPreset().build();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrRedUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrRedUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrRedUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrRedUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-red-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-red",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

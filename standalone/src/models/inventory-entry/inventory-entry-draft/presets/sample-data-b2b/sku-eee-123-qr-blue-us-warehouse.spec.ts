import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-eee-123-qr-blue-us-warehouse';

describe(`with skuEee123QrBlueUsWarehouse preset`, () => {
  it(`should return a skuEee123QrBlueUsWarehouse preset when built for rest`, () => {
    const skuEee123QrBlueUsWarehousePreset = presets.restPreset().build();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrBlueUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrBlueUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrBlueUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrBlueUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-blue-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-blue",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

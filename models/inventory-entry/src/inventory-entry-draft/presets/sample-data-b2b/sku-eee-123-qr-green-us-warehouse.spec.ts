import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-eee-123-qr-green-us-warehouse';

describe(`with skuEee123QrGreenUsWarehouse preset`, () => {
  it(`should return a skuEee123QrGreenUsWarehouse preset when built for rest`, () => {
    const skuEee123QrGreenUsWarehousePreset = presets.restPreset().build();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for graphql`, () => {
    const skuEee123QrGreenUsWarehousePreset = presets.graphqlPreset().build();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for legacy rest`, () => {
    const skuEee123QrGreenUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEee123QrGreenUsWarehouse preset when built for legacy graphql`, () => {
    const skuEee123QrGreenUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEee123QrGreenUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "eee123-qr-green-us-warehouse",
        "quantityOnStock": 999,
        "restockableInDays": undefined,
        "sku": "eee123-qr-green",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

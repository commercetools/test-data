import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-g-123-qr-2015-eu-warehouse';

describe(`with skuG123Qr2015EuWarehouse preset`, () => {
  it(`should return a skuG123Qr2015EuWarehouse preset when built for rest`, () => {
    const skuG123Qr2015EuWarehousePreset = presets.restPreset().build();
    expect(skuG123Qr2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuG123Qr2015EuWarehouse preset when built for graphql`, () => {
    const skuG123Qr2015EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuG123Qr2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuG123Qr2015EuWarehouse preset when built for legacy rest`, () => {
    const skuG123Qr2015EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuG123Qr2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuG123Qr2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuG123Qr2015EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuG123Qr2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

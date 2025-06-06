import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-u-123-qr-2019-us-warehouse';

describe(`with skuU123Qr2019UsWarehouse preset`, () => {
  it(`should return a skuU123Qr2019UsWarehouse preset when built for rest`, () => {
    const skuU123Qr2019UsWarehousePreset = presets.restPreset().build();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for graphql`, () => {
    const skuU123Qr2019UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for legacy rest`, () => {
    const skuU123Qr2019UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuU123Qr2019UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuU123Qr2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aa-123-qr-2023-default-warehouse';

describe(`with skuAa123Qr2023DefaultWarehouse preset`, () => {
  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for rest`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = presets.restPreset().build();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for graphql`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAa123Qr2023DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAa123Qr2023DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

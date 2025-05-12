import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pin-and-bushing-kit-default-warehouse';

describe(`with skuPinAndBushingKitDefaultWarehouse preset`, () => {
  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for rest`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset = presets
      .restPreset()
      .build();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for graphql`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for legacy rest`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuPinAndBushingKitDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPinAndBushingKitDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

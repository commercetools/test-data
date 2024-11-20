import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pin-and-bushing-kit-us-warehouse';

describe(`with skuPinAndBushingKitUsWarehouse preset`, () => {
  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for rest`, () => {
    const skuPinAndBushingKitUsWarehousePreset = presets.restPreset().build();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for graphql`, () => {
    const skuPinAndBushingKitUsWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for legacy rest`, () => {
    const skuPinAndBushingKitUsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPinAndBushingKitUsWarehouse preset when built for legacy graphql`, () => {
    const skuPinAndBushingKitUsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPinAndBushingKitUsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pin-and-bushing-kit-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pin-and-bushing-kit",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

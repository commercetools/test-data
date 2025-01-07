import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tapered-roller-bearing-default-warehouse';

describe(`with skuTaperedRollerBearingDefaultWarehouse preset`, () => {
  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for rest`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset = presets
      .restPreset()
      .build();
    expect(skuTaperedRollerBearingDefaultWarehousePreset)
      .toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for graphql`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuTaperedRollerBearingDefaultWarehousePreset)
      .toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for legacy rest`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTaperedRollerBearingDefaultWarehousePreset)
      .toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuTaperedRollerBearingDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTaperedRollerBearingDefaultWarehousePreset)
      .toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

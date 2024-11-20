import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tapered-roller-bearing-eu-warehouse';

describe(`with skuTaperedRollerBearingEuWarehouse preset`, () => {
  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for rest`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = presets
      .restPreset()
      .build();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for graphql`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for legacy rest`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuTaperedRollerBearingEuWarehouse preset when built for legacy graphql`, () => {
    const skuTaperedRollerBearingEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTaperedRollerBearingEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "tapered-roller-bearing-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "tapered-roller-bearing",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

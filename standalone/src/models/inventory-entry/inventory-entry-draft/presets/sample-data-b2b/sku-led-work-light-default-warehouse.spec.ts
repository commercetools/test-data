import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-led-work-light-default-warehouse';

describe(`with skuLedWorkLightDefaultWarehouse preset`, () => {
  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for rest`, () => {
    const skuLedWorkLightDefaultWarehousePreset = presets.restPreset().build();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for graphql`, () => {
    const skuLedWorkLightDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for legacy rest`, () => {
    const skuLedWorkLightDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuLedWorkLightDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "led-work-light-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "led-work-light",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

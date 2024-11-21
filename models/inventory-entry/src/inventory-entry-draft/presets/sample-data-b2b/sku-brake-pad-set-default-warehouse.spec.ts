import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-brake-pad-set-default-warehouse';

describe(`with skuBrakePadSetDefaultWarehouse preset`, () => {
  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for rest`, () => {
    const skuBrakePadSetDefaultWarehousePreset = presets.restPreset().build();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for graphql`, () => {
    const skuBrakePadSetDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for legacy rest`, () => {
    const skuBrakePadSetDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuBrakePadSetDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBrakePadSetDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

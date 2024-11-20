import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-brake-pad-set-eu-warehouse';

describe(`with skuBrakePadSetEuWarehouse preset`, () => {
  it(`should return a skuBrakePadSetEuWarehouse preset when built for rest`, () => {
    const skuBrakePadSetEuWarehousePreset = presets.restPreset().build();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for graphql`, () => {
    const skuBrakePadSetEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for legacy rest`, () => {
    const skuBrakePadSetEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for legacy graphql`, () => {
    const skuBrakePadSetEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

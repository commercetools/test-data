import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-iii-567-yz-red-default-warehouse';

describe(`with skuIii567YzRedDefaultWarehouse preset`, () => {
  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for rest`, () => {
    const skuIii567YzRedDefaultWarehousePreset = presets.restPreset().build();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for graphql`, () => {
    const skuIii567YzRedDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuIii567YzRedDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIii567YzRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuIii567YzRedDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIii567YzRedDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "iii567-yz-red-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "iii567-yz-red",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

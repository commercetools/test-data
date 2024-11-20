import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-xx-890-op-blue-default-warehouse';

describe(`with skuXx890OpBlueDefaultWarehouse preset`, () => {
  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for rest`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = presets.restPreset().build();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for graphql`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for legacy rest`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuXx890OpBlueDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuXx890OpBlueDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuXx890OpBlueDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "xx890-op-blue-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

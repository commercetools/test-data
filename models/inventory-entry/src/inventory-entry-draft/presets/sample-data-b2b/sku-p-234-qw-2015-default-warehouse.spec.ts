import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-p-234-qw-2015-default-warehouse';

describe(`with skuP234Qw2015DefaultWarehouse preset`, () => {
  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for rest`, () => {
    const skuP234Qw2015DefaultWarehousePreset = presets.restPreset().build();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for graphql`, () => {
    const skuP234Qw2015DefaultWarehousePreset = presets.graphqlPreset().build();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2015DefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2015DefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2015DefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

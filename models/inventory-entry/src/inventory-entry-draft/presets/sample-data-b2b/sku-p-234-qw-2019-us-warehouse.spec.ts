import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-p-234-qw-2019-us-warehouse';

describe(`with skuP234Qw2019UsWarehouse preset`, () => {
  it(`should return a skuP234Qw2019UsWarehouse preset when built for rest`, () => {
    const skuP234Qw2019UsWarehousePreset = presets.restPreset().build();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for graphql`, () => {
    const skuP234Qw2019UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for legacy rest`, () => {
    const skuP234Qw2019UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuP234Qw2019UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuP234Qw2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jj-234-wx-2019-us-warehouse';

describe(`with skuJj234Wx2019UsWarehouse preset`, () => {
  it(`should return a skuJj234Wx2019UsWarehouse preset when built for rest`, () => {
    const skuJj234Wx2019UsWarehousePreset = presets.restPreset().build();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2019UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2019UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2019UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2019UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-jj-234-wx-2023-eu-warehouse';

describe(`with skuJj234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuJj234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuJj234Wx2023EuWarehousePreset = presets.restPreset().build();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuJj234Wx2023EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuJj234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuJj234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJj234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
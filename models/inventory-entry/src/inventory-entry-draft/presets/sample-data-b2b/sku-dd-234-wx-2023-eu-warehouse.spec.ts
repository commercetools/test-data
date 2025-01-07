import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-dd-234-wx-2023-eu-warehouse';

describe(`with skuDd234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuDd234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuDd234Wx2023EuWarehousePreset = presets.restPreset().build();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuDd234Wx2023EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuDd234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuDd234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDd234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

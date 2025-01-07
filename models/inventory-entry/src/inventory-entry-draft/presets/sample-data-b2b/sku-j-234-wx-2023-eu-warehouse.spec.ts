import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-j-234-wx-2023-eu-warehouse';

describe(`with skuJ234Wx2023EuWarehouse preset`, () => {
  it(`should return a skuJ234Wx2023EuWarehouse preset when built for rest`, () => {
    const skuJ234Wx2023EuWarehousePreset = presets.restPreset().build();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for graphql`, () => {
    const skuJ234Wx2023EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for legacy rest`, () => {
    const skuJ234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJ234Wx2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuJ234Wx2023EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJ234Wx2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

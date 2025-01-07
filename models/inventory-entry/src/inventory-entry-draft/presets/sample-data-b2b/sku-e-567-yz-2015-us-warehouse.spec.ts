import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-e-567-yz-2015-us-warehouse';

describe(`with skuE567Yz2015UsWarehouse preset`, () => {
  it(`should return a skuE567Yz2015UsWarehouse preset when built for rest`, () => {
    const skuE567Yz2015UsWarehousePreset = presets.restPreset().build();
    expect(skuE567Yz2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015UsWarehouse preset when built for graphql`, () => {
    const skuE567Yz2015UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuE567Yz2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015UsWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2015UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2015UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

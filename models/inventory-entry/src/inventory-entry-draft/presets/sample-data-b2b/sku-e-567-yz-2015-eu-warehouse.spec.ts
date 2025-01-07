import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-e-567-yz-2015-eu-warehouse';

describe(`with skuE567Yz2015EuWarehouse preset`, () => {
  it(`should return a skuE567Yz2015EuWarehouse preset when built for rest`, () => {
    const skuE567Yz2015EuWarehousePreset = presets.restPreset().build();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for graphql`, () => {
    const skuE567Yz2015EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for legacy rest`, () => {
    const skuE567Yz2015EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuE567Yz2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuE567Yz2015EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuE567Yz2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "e567-yz-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "e567-yz-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-k-567-yz-2023-eu-warehouse';

describe(`with skuK567Yz2023EuWarehouse preset`, () => {
  it(`should return a skuK567Yz2023EuWarehouse preset when built for rest`, () => {
    const skuK567Yz2023EuWarehousePreset = presets.restPreset().build();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for graphql`, () => {
    const skuK567Yz2023EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for legacy rest`, () => {
    const skuK567Yz2023EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuK567Yz2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuK567Yz2023EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuK567Yz2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "k567-yz-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "k567-yz-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

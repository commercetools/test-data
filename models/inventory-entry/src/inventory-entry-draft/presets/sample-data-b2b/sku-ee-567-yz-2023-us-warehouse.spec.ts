import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ee-567-yz-2023-us-warehouse';

describe(`with skuEe567Yz2023UsWarehouse preset`, () => {
  it(`should return a skuEe567Yz2023UsWarehouse preset when built for rest`, () => {
    const skuEe567Yz2023UsWarehousePreset = presets.restPreset().build();
    expect(skuEe567Yz2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2023UsWarehouse preset when built for graphql`, () => {
    const skuEe567Yz2023UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuEe567Yz2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2023UsWarehouse preset when built for legacy rest`, () => {
    const skuEe567Yz2023UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEe567Yz2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuEe567Yz2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuEe567Yz2023UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEe567Yz2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ee567-yz-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ee567-yz-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ff-890-op-2023-us-warehouse';

describe(`with skuFf890Op2023UsWarehouse preset`, () => {
  it(`should return a skuFf890Op2023UsWarehouse preset when built for rest`, () => {
    const skuFf890Op2023UsWarehousePreset = presets.restPreset().build();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for graphql`, () => {
    const skuFf890Op2023UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2023UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFf890Op2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2023UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2023UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-l-890-op-2023-eu-warehouse';

describe(`with skuL890Op2023EuWarehouse preset`, () => {
  it(`should return a skuL890Op2023EuWarehouse preset when built for rest`, () => {
    const skuL890Op2023EuWarehousePreset = presets.restPreset().build();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuL890Op2023EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2023EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2023EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

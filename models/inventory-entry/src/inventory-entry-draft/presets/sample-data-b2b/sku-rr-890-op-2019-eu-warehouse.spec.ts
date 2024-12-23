import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rr-890-op-2019-eu-warehouse';

describe(`with skuRr890Op2019EuWarehouse preset`, () => {
  it(`should return a skuRr890Op2019EuWarehouse preset when built for rest`, () => {
    const skuRr890Op2019EuWarehousePreset = presets.restPreset().build();
    expect(skuRr890Op2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuRr890Op2019EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuRr890Op2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuRr890Op2019EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRr890Op2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuRr890Op2019EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRr890Op2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

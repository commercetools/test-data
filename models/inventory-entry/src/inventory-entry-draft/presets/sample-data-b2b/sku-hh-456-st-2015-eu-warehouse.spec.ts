import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hh-456-st-2015-eu-warehouse';

describe(`with skuHh456St2015EuWarehouse preset`, () => {
  it(`should return a skuHh456St2015EuWarehouse preset when built for rest`, () => {
    const skuHh456St2015EuWarehousePreset = presets.restPreset().build();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for graphql`, () => {
    const skuHh456St2015EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for legacy rest`, () => {
    const skuHh456St2015EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuHh456St2015EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHh456St2015EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

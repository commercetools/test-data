import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-c-789-uv-2019-eu-warehouse';

describe(`with skuC789Uv2019EuWarehouse preset`, () => {
  it(`should return a skuC789Uv2019EuWarehouse preset when built for rest`, () => {
    const skuC789Uv2019EuWarehousePreset = presets.restPreset().build();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for graphql`, () => {
    const skuC789Uv2019EuWarehousePreset = presets.graphqlPreset().build();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for legacy rest`, () => {
    const skuC789Uv2019EuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuC789Uv2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuC789Uv2019EuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuC789Uv2019EuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

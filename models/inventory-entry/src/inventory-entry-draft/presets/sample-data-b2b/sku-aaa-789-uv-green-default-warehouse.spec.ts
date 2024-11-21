import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aaa-789-uv-green-default-warehouse';

describe(`with skuAaa789UvGreenDefaultWarehouse preset`, () => {
  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for rest`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = presets.restPreset().build();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for graphql`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = presets
      .graphqlPreset()
      .build();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAaa789UvGreenDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvGreenDefaultWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvGreenDefaultWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aaa789-uv-green-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aaa789-uv-green",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

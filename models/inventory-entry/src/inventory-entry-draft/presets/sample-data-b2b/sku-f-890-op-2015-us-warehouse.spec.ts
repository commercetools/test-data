import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-f-890-op-2015-us-warehouse';

describe(`with skuF890Op2015UsWarehouse preset`, () => {
  it(`should return a skuF890Op2015UsWarehouse preset when built for rest`, () => {
    const skuF890Op2015UsWarehousePreset = presets.restPreset().build();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuF890Op2015UsWarehousePreset = presets.graphqlPreset().build();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2015UsWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2015UsWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2015UsWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

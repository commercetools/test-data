import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pneumatic-tire-eu-warehouse';

describe(`with skuPneumaticTireEuWarehouse preset`, () => {
  it(`should return a skuPneumaticTireEuWarehouse preset when built for rest`, () => {
    const skuPneumaticTireEuWarehousePreset = presets.restPreset().build();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for graphql`, () => {
    const skuPneumaticTireEuWarehousePreset = presets.graphqlPreset().build();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for legacy rest`, () => {
    const skuPneumaticTireEuWarehousePreset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireEuWarehouse preset when built for legacy graphql`, () => {
    const skuPneumaticTireEuWarehousePreset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPneumaticTireEuWarehousePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});

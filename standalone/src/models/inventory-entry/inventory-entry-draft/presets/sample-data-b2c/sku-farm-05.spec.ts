import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-farm-05';

describe(`with skuFarm05 preset`, () => {
  it(`should return a skuFarm05 preset when built for rest`, () => {
    const skuFarm05Preset = presets.restPreset().build();
    expect(skuFarm05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFarm05 preset when built for graphql`, () => {
    const skuFarm05Preset = presets.graphqlPreset().build();
    expect(skuFarm05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFarm05 preset when built for legacy rest`, () => {
    const skuFarm05Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFarm05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFarm05 preset when built for legacy graphql`, () => {
    const skuFarm05Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFarm05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "FARM-05",
        "supplyChannel": undefined,
      }
    `);
  });
});

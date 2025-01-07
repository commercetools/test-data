import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lco-034';

describe(`with skuLco034 preset`, () => {
  it(`should return a skuLco034 preset when built for rest`, () => {
    const skuLco034Preset = presets.restPreset().build();
    expect(skuLco034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLco034 preset when built for graphql`, () => {
    const skuLco034Preset = presets.graphqlPreset().build();
    expect(skuLco034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLco034 preset when built for legacy rest`, () => {
    const skuLco034Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLco034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLco034 preset when built for legacy graphql`, () => {
    const skuLco034Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLco034Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "LCO-034",
        "supplyChannel": undefined,
      }
    `);
  });
});

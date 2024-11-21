import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-amr-09';

describe(`with skuAmr09 preset`, () => {
  it(`should return a skuAmr09 preset when built for rest`, () => {
    const skuAmr09Preset = presets.restPreset().build();
    expect(skuAmr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AMR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAmr09 preset when built for graphql`, () => {
    const skuAmr09Preset = presets.graphqlPreset().build();
    expect(skuAmr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AMR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAmr09 preset when built for legacy rest`, () => {
    const skuAmr09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAmr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AMR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAmr09 preset when built for legacy graphql`, () => {
    const skuAmr09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAmr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AMR-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

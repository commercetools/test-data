import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lcp-01';

describe(`with skuLcp01 preset`, () => {
  it(`should return a skuLcp01 preset when built for rest`, () => {
    const skuLcp01Preset = presets.restPreset().build();
    expect(skuLcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp01 preset when built for graphql`, () => {
    const skuLcp01Preset = presets.graphqlPreset().build();
    expect(skuLcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp01 preset when built for legacy rest`, () => {
    const skuLcp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp01 preset when built for legacy graphql`, () => {
    const skuLcp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLcp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 74,
        "restockableInDays": undefined,
        "sku": "LCP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

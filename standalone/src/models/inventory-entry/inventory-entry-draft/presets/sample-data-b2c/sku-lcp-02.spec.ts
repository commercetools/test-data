import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lcp-02';

describe(`with skuLcp02 preset`, () => {
  it(`should return a skuLcp02 preset when built for rest`, () => {
    const skuLcp02Preset = presets.restPreset().build();
    expect(skuLcp02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LCP-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp02 preset when built for graphql`, () => {
    const skuLcp02Preset = presets.graphqlPreset().build();
    expect(skuLcp02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LCP-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp02 preset when built for legacy rest`, () => {
    const skuLcp02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLcp02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LCP-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLcp02 preset when built for legacy graphql`, () => {
    const skuLcp02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLcp02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LCP-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

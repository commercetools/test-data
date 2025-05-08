import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-wcs-09';

describe(`with skuWcs09 preset`, () => {
  it(`should return a skuWcs09 preset when built for rest`, () => {
    const skuWcs09Preset = presets.restPreset().build();
    expect(skuWcs09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcs09 preset when built for graphql`, () => {
    const skuWcs09Preset = presets.graphqlPreset().build();
    expect(skuWcs09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcs09 preset when built for legacy rest`, () => {
    const skuWcs09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWcs09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcs09 preset when built for legacy graphql`, () => {
    const skuWcs09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWcs09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCS-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

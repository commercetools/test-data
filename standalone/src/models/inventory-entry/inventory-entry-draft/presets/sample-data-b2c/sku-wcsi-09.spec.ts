import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-wcsi-09';

describe(`with skuWcsi09 preset`, () => {
  it(`should return a skuWcsi09 preset when built for rest`, () => {
    const skuWcsi09Preset = presets.restPreset().build();
    expect(skuWcsi09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcsi09 preset when built for graphql`, () => {
    const skuWcsi09Preset = presets.graphqlPreset().build();
    expect(skuWcsi09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcsi09 preset when built for legacy rest`, () => {
    const skuWcsi09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWcsi09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWcsi09 preset when built for legacy graphql`, () => {
    const skuWcsi09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWcsi09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WCSI-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

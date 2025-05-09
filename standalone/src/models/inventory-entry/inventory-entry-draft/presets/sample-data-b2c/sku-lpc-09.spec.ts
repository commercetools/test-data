import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lpc-09';

describe(`with skuLpc09 preset`, () => {
  it(`should return a skuLpc09 preset when built for rest`, () => {
    const skuLpc09Preset = presets.restPreset().build();
    expect(skuLpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc09 preset when built for graphql`, () => {
    const skuLpc09Preset = presets.graphqlPreset().build();
    expect(skuLpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc09 preset when built for legacy rest`, () => {
    const skuLpc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc09 preset when built for legacy graphql`, () => {
    const skuLpc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

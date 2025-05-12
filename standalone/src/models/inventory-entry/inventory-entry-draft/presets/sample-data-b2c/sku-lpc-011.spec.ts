import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lpc-011';

describe(`with skuLpc011 preset`, () => {
  it(`should return a skuLpc011 preset when built for rest`, () => {
    const skuLpc011Preset = presets.restPreset().build();
    expect(skuLpc011Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-011",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc011 preset when built for graphql`, () => {
    const skuLpc011Preset = presets.graphqlPreset().build();
    expect(skuLpc011Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-011",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc011 preset when built for legacy rest`, () => {
    const skuLpc011Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLpc011Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-011",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLpc011 preset when built for legacy graphql`, () => {
    const skuLpc011Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLpc011Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LPC-011",
        "supplyChannel": undefined,
      }
    `);
  });
});

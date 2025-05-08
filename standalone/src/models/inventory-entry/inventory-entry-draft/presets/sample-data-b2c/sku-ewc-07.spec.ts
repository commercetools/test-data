import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ewc-07';

describe(`with skuEwc07 preset`, () => {
  it(`should return a skuEwc07 preset when built for rest`, () => {
    const skuEwc07Preset = presets.restPreset().build();
    expect(skuEwc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EWC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEwc07 preset when built for graphql`, () => {
    const skuEwc07Preset = presets.graphqlPreset().build();
    expect(skuEwc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EWC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEwc07 preset when built for legacy rest`, () => {
    const skuEwc07Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuEwc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EWC-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuEwc07 preset when built for legacy graphql`, () => {
    const skuEwc07Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuEwc07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "EWC-07",
        "supplyChannel": undefined,
      }
    `);
  });
});

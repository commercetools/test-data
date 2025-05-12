import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rlc-08';

describe(`with skuRlc08 preset`, () => {
  it(`should return a skuRlc08 preset when built for rest`, () => {
    const skuRlc08Preset = presets.restPreset().build();
    expect(skuRlc08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRlc08 preset when built for graphql`, () => {
    const skuRlc08Preset = presets.graphqlPreset().build();
    expect(skuRlc08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRlc08 preset when built for legacy rest`, () => {
    const skuRlc08Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRlc08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRlc08 preset when built for legacy graphql`, () => {
    const skuRlc08Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRlc08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RLC-08",
        "supplyChannel": undefined,
      }
    `);
  });
});

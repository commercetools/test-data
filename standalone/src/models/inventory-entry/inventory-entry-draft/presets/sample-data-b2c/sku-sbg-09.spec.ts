import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sbg-09';

describe(`with skuSbg09 preset`, () => {
  it(`should return a skuSbg09 preset when built for rest`, () => {
    const skuSbg09Preset = presets.restPreset().build();
    expect(skuSbg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SBG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSbg09 preset when built for graphql`, () => {
    const skuSbg09Preset = presets.graphqlPreset().build();
    expect(skuSbg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SBG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSbg09 preset when built for legacy rest`, () => {
    const skuSbg09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSbg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SBG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSbg09 preset when built for legacy graphql`, () => {
    const skuSbg09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSbg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SBG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

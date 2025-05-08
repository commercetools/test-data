import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-otb-07';

describe(`with skuOtb07 preset`, () => {
  it(`should return a skuOtb07 preset when built for rest`, () => {
    const skuOtb07Preset = presets.restPreset().build();
    expect(skuOtb07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOtb07 preset when built for graphql`, () => {
    const skuOtb07Preset = presets.graphqlPreset().build();
    expect(skuOtb07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOtb07 preset when built for legacy rest`, () => {
    const skuOtb07Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuOtb07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOtb07 preset when built for legacy graphql`, () => {
    const skuOtb07Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuOtb07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "OTB-07",
        "supplyChannel": undefined,
      }
    `);
  });
});

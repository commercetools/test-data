import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mr-08';

describe(`with skuMr08 preset`, () => {
  it(`should return a skuMr08 preset when built for rest`, () => {
    const skuMr08Preset = presets.restPreset().build();
    expect(skuMr08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr08 preset when built for graphql`, () => {
    const skuMr08Preset = presets.graphqlPreset().build();
    expect(skuMr08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr08 preset when built for legacy rest`, () => {
    const skuMr08Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMr08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMr08 preset when built for legacy graphql`, () => {
    const skuMr08Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMr08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MR-08",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-bcoas-08';

describe(`with skuBcoas08 preset`, () => {
  it(`should return a skuBcoas08 preset when built for rest`, () => {
    const skuBcoas08Preset = presets.restPreset().build();
    expect(skuBcoas08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBcoas08 preset when built for graphql`, () => {
    const skuBcoas08Preset = presets.graphqlPreset().build();
    expect(skuBcoas08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBcoas08 preset when built for legacy rest`, () => {
    const skuBcoas08Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBcoas08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBcoas08 preset when built for legacy graphql`, () => {
    const skuBcoas08Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBcoas08Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BCOAS-08",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lbpc-09';

describe(`with skuLbpc09 preset`, () => {
  it(`should return a skuLbpc09 preset when built for rest`, () => {
    const skuLbpc09Preset = presets.restPreset().build();
    expect(skuLbpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLbpc09 preset when built for graphql`, () => {
    const skuLbpc09Preset = presets.graphqlPreset().build();
    expect(skuLbpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLbpc09 preset when built for legacy rest`, () => {
    const skuLbpc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLbpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLbpc09 preset when built for legacy graphql`, () => {
    const skuLbpc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLbpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LBPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

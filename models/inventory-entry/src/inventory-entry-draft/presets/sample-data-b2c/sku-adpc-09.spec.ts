import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-adpc-09';

describe(`with skuAdpc09 preset`, () => {
  it(`should return a skuAdpc09 preset when built for rest`, () => {
    const skuAdpc09Preset = presets.restPreset().build();
    expect(skuAdpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc09 preset when built for graphql`, () => {
    const skuAdpc09Preset = presets.graphqlPreset().build();
    expect(skuAdpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc09 preset when built for legacy rest`, () => {
    const skuAdpc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAdpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAdpc09 preset when built for legacy graphql`, () => {
    const skuAdpc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAdpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "ADPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

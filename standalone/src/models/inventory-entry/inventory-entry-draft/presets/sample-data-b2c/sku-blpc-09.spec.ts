import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-blpc-09';

describe(`with skuBlpc09 preset`, () => {
  it(`should return a skuBlpc09 preset when built for rest`, () => {
    const skuBlpc09Preset = presets.restPreset().build();
    expect(skuBlpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BLPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlpc09 preset when built for graphql`, () => {
    const skuBlpc09Preset = presets.graphqlPreset().build();
    expect(skuBlpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BLPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlpc09 preset when built for legacy rest`, () => {
    const skuBlpc09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBlpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BLPC-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlpc09 preset when built for legacy graphql`, () => {
    const skuBlpc09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBlpc09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BLPC-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

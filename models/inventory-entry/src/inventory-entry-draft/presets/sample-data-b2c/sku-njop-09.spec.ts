import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-njop-09';

describe(`with skuNjop09 preset`, () => {
  it(`should return a skuNjop09 preset when built for rest`, () => {
    const skuNjop09Preset = presets.restPreset().build();
    expect(skuNjop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNjop09 preset when built for graphql`, () => {
    const skuNjop09Preset = presets.graphqlPreset().build();
    expect(skuNjop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNjop09 preset when built for legacy rest`, () => {
    const skuNjop09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNjop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNjop09 preset when built for legacy graphql`, () => {
    const skuNjop09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNjop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "NJOP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-nr-09';

describe(`with skuNr09 preset`, () => {
  it(`should return a skuNr09 preset when built for rest`, () => {
    const skuNr09Preset = presets.restPreset().build();
    expect(skuNr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNr09 preset when built for graphql`, () => {
    const skuNr09Preset = presets.graphqlPreset().build();
    expect(skuNr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNr09 preset when built for legacy rest`, () => {
    const skuNr09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNr09 preset when built for legacy graphql`, () => {
    const skuNr09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNr09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NR-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

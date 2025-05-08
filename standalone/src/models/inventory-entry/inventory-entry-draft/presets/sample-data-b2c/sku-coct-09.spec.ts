import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-coct-09';

describe(`with skuCoct09 preset`, () => {
  it(`should return a skuCoct09 preset when built for rest`, () => {
    const skuCoct09Preset = presets.restPreset().build();
    expect(skuCoct09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COCT-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoct09 preset when built for graphql`, () => {
    const skuCoct09Preset = presets.graphqlPreset().build();
    expect(skuCoct09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COCT-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoct09 preset when built for legacy rest`, () => {
    const skuCoct09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCoct09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COCT-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoct09 preset when built for legacy graphql`, () => {
    const skuCoct09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCoct09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COCT-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

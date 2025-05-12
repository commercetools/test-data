import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sarm-09';

describe(`with skuSarm09 preset`, () => {
  it(`should return a skuSarm09 preset when built for rest`, () => {
    const skuSarm09Preset = presets.restPreset().build();
    expect(skuSarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarm09 preset when built for graphql`, () => {
    const skuSarm09Preset = presets.graphqlPreset().build();
    expect(skuSarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarm09 preset when built for legacy rest`, () => {
    const skuSarm09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSarm09 preset when built for legacy graphql`, () => {
    const skuSarm09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SARM-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

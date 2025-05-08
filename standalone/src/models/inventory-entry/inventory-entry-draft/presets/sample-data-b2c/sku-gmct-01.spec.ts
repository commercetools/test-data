import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-gmct-01';

describe(`with skuGmct01 preset`, () => {
  it(`should return a skuGmct01 preset when built for rest`, () => {
    const skuGmct01Preset = presets.restPreset().build();
    expect(skuGmct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGmct01 preset when built for graphql`, () => {
    const skuGmct01Preset = presets.graphqlPreset().build();
    expect(skuGmct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGmct01 preset when built for legacy rest`, () => {
    const skuGmct01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGmct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGmct01 preset when built for legacy graphql`, () => {
    const skuGmct01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGmct01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "GMCT-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

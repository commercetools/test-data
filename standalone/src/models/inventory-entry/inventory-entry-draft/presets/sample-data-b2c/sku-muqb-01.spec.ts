import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-muqb-01';

describe(`with skuMuqb01 preset`, () => {
  it(`should return a skuMuqb01 preset when built for rest`, () => {
    const skuMuqb01Preset = presets.restPreset().build();
    expect(skuMuqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMuqb01 preset when built for graphql`, () => {
    const skuMuqb01Preset = presets.graphqlPreset().build();
    expect(skuMuqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMuqb01 preset when built for legacy rest`, () => {
    const skuMuqb01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMuqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMuqb01 preset when built for legacy graphql`, () => {
    const skuMuqb01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMuqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "MUQB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

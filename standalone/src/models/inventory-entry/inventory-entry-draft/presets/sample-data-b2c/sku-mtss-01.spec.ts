import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mtss-01';

describe(`with skuMtss01 preset`, () => {
  it(`should return a skuMtss01 preset when built for rest`, () => {
    const skuMtss01Preset = presets.restPreset().build();
    expect(skuMtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtss01 preset when built for graphql`, () => {
    const skuMtss01Preset = presets.graphqlPreset().build();
    expect(skuMtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtss01 preset when built for legacy rest`, () => {
    const skuMtss01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMtss01 preset when built for legacy graphql`, () => {
    const skuMtss01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMtss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 94,
        "restockableInDays": undefined,
        "sku": "MTSS-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

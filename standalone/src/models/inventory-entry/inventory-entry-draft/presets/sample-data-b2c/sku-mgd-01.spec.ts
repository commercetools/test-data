import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mgd-01';

describe(`with skuMgd01 preset`, () => {
  it(`should return a skuMgd01 preset when built for rest`, () => {
    const skuMgd01Preset = presets.restPreset().build();
    expect(skuMgd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMgd01 preset when built for graphql`, () => {
    const skuMgd01Preset = presets.graphqlPreset().build();
    expect(skuMgd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMgd01 preset when built for legacy rest`, () => {
    const skuMgd01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMgd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMgd01 preset when built for legacy graphql`, () => {
    const skuMgd01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMgd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "MGD-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

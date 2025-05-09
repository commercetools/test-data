import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-vc-01';

describe(`with skuVc01 preset`, () => {
  it(`should return a skuVc01 preset when built for rest`, () => {
    const skuVc01Preset = presets.restPreset().build();
    expect(skuVc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "VC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVc01 preset when built for graphql`, () => {
    const skuVc01Preset = presets.graphqlPreset().build();
    expect(skuVc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "VC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVc01 preset when built for legacy rest`, () => {
    const skuVc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "VC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVc01 preset when built for legacy graphql`, () => {
    const skuVc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "VC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

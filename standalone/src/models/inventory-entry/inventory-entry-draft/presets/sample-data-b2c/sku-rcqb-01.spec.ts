import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rcqb-01';

describe(`with skuRcqb01 preset`, () => {
  it(`should return a skuRcqb01 preset when built for rest`, () => {
    const skuRcqb01Preset = presets.restPreset().build();
    expect(skuRcqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "RCQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcqb01 preset when built for graphql`, () => {
    const skuRcqb01Preset = presets.graphqlPreset().build();
    expect(skuRcqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "RCQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcqb01 preset when built for legacy rest`, () => {
    const skuRcqb01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "RCQB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcqb01 preset when built for legacy graphql`, () => {
    const skuRcqb01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcqb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 76,
        "restockableInDays": undefined,
        "sku": "RCQB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

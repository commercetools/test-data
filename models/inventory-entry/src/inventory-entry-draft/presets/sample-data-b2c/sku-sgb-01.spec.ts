import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sgb-01';

describe(`with skuSgb01 preset`, () => {
  it(`should return a skuSgb01 preset when built for rest`, () => {
    const skuSgb01Preset = presets.restPreset().build();
    expect(skuSgb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb01 preset when built for graphql`, () => {
    const skuSgb01Preset = presets.graphqlPreset().build();
    expect(skuSgb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb01 preset when built for legacy rest`, () => {
    const skuSgb01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSgb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb01 preset when built for legacy graphql`, () => {
    const skuSgb01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSgb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "SGB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

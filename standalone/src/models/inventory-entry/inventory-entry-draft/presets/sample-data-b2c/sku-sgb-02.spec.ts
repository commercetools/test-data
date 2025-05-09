import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sgb-02';

describe(`with skuSgb02 preset`, () => {
  it(`should return a skuSgb02 preset when built for rest`, () => {
    const skuSgb02Preset = presets.restPreset().build();
    expect(skuSgb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SGB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb02 preset when built for graphql`, () => {
    const skuSgb02Preset = presets.graphqlPreset().build();
    expect(skuSgb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SGB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb02 preset when built for legacy rest`, () => {
    const skuSgb02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSgb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SGB-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSgb02 preset when built for legacy graphql`, () => {
    const skuSgb02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSgb02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SGB-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

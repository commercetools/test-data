import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-scm-02';

describe(`with skuScm02 preset`, () => {
  it(`should return a skuScm02 preset when built for rest`, () => {
    const skuScm02Preset = presets.restPreset().build();
    expect(skuScm02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScm02 preset when built for graphql`, () => {
    const skuScm02Preset = presets.graphqlPreset().build();
    expect(skuScm02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScm02 preset when built for legacy rest`, () => {
    const skuScm02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuScm02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuScm02 preset when built for legacy graphql`, () => {
    const skuScm02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuScm02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SCM-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

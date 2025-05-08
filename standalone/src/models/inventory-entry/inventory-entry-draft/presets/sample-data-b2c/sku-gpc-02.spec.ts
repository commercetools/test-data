import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-gpc-02';

describe(`with skuGpc02 preset`, () => {
  it(`should return a skuGpc02 preset when built for rest`, () => {
    const skuGpc02Preset = presets.restPreset().build();
    expect(skuGpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc02 preset when built for graphql`, () => {
    const skuGpc02Preset = presets.graphqlPreset().build();
    expect(skuGpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc02 preset when built for legacy rest`, () => {
    const skuGpc02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGpc02 preset when built for legacy graphql`, () => {
    const skuGpc02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGpc02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GPC-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

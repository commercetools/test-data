import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-02';

describe(`with skuNtss02 preset`, () => {
  it(`should return a skuNtss02 preset when built for rest`, () => {
    const skuNtss02Preset = presets.restPreset().build();
    expect(skuNtss02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss02 preset when built for graphql`, () => {
    const skuNtss02Preset = presets.graphqlPreset().build();
    expect(skuNtss02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss02 preset when built for legacy rest`, () => {
    const skuNtss02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss02 preset when built for legacy graphql`, () => {
    const skuNtss02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

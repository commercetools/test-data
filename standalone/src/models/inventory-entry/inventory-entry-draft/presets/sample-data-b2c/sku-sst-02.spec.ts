import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-sst-02';

describe(`with skuSst02 preset`, () => {
  it(`should return a skuSst02 preset when built for rest`, () => {
    const skuSst02Preset = presets.restPreset().build();
    expect(skuSst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSst02 preset when built for graphql`, () => {
    const skuSst02Preset = presets.graphqlPreset().build();
    expect(skuSst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSst02 preset when built for legacy rest`, () => {
    const skuSst02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSst02 preset when built for legacy graphql`, () => {
    const skuSst02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

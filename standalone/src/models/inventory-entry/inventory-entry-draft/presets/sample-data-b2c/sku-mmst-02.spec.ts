import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mmst-02';

describe(`with skuMmst02 preset`, () => {
  it(`should return a skuMmst02 preset when built for rest`, () => {
    const skuMmst02Preset = presets.restPreset().build();
    expect(skuMmst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MMST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst02 preset when built for graphql`, () => {
    const skuMmst02Preset = presets.graphqlPreset().build();
    expect(skuMmst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MMST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst02 preset when built for legacy rest`, () => {
    const skuMmst02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMmst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MMST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst02 preset when built for legacy graphql`, () => {
    const skuMmst02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMmst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MMST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

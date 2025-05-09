import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mmst-01';

describe(`with skuMmst01 preset`, () => {
  it(`should return a skuMmst01 preset when built for rest`, () => {
    const skuMmst01Preset = presets.restPreset().build();
    expect(skuMmst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst01 preset when built for graphql`, () => {
    const skuMmst01Preset = presets.graphqlPreset().build();
    expect(skuMmst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst01 preset when built for legacy rest`, () => {
    const skuMmst01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMmst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMmst01 preset when built for legacy graphql`, () => {
    const skuMmst01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMmst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 72,
        "restockableInDays": undefined,
        "sku": "MMST-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

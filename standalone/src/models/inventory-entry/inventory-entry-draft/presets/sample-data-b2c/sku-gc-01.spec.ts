import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-gc-01';

describe(`with skuGc01 preset`, () => {
  it(`should return a skuGc01 preset when built for rest`, () => {
    const skuGc01Preset = presets.restPreset().build();
    expect(skuGc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGc01 preset when built for graphql`, () => {
    const skuGc01Preset = presets.graphqlPreset().build();
    expect(skuGc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGc01 preset when built for legacy rest`, () => {
    const skuGc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGc01 preset when built for legacy graphql`, () => {
    const skuGc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "GC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

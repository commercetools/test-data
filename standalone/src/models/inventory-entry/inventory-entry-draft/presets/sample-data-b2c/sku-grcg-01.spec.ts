import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-grcg-01';

describe(`with skuGrcg01 preset`, () => {
  it(`should return a skuGrcg01 preset when built for rest`, () => {
    const skuGrcg01Preset = presets.restPreset().build();
    expect(skuGrcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGrcg01 preset when built for graphql`, () => {
    const skuGrcg01Preset = presets.graphqlPreset().build();
    expect(skuGrcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGrcg01 preset when built for legacy rest`, () => {
    const skuGrcg01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGrcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGrcg01 preset when built for legacy graphql`, () => {
    const skuGrcg01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGrcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 0,
        "restockableInDays": undefined,
        "sku": "GRCG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-varm-09';

describe(`with skuVarm09 preset`, () => {
  it(`should return a skuVarm09 preset when built for rest`, () => {
    const skuVarm09Preset = presets.restPreset().build();
    expect(skuVarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVarm09 preset when built for graphql`, () => {
    const skuVarm09Preset = presets.graphqlPreset().build();
    expect(skuVarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVarm09 preset when built for legacy rest`, () => {
    const skuVarm09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuVarm09 preset when built for legacy graphql`, () => {
    const skuVarm09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVarm09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "VARM-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

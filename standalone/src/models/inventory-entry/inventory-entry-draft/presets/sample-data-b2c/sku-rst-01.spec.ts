import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rst-01';

describe(`with skuRst01 preset`, () => {
  it(`should return a skuRst01 preset when built for rest`, () => {
    const skuRst01Preset = presets.restPreset().build();
    expect(skuRst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst01 preset when built for graphql`, () => {
    const skuRst01Preset = presets.graphqlPreset().build();
    expect(skuRst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst01 preset when built for legacy rest`, () => {
    const skuRst01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst01 preset when built for legacy graphql`, () => {
    const skuRst01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

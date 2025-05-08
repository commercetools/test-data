import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rst-02';

describe(`with skuRst02 preset`, () => {
  it(`should return a skuRst02 preset when built for rest`, () => {
    const skuRst02Preset = presets.restPreset().build();
    expect(skuRst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst02 preset when built for graphql`, () => {
    const skuRst02Preset = presets.graphqlPreset().build();
    expect(skuRst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst02 preset when built for legacy rest`, () => {
    const skuRst02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRst02 preset when built for legacy graphql`, () => {
    const skuRst02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "RST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mlp-01';

describe(`with skuMlp01 preset`, () => {
  it(`should return a skuMlp01 preset when built for rest`, () => {
    const skuMlp01Preset = presets.restPreset().build();
    expect(skuMlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 84,
        "restockableInDays": undefined,
        "sku": "MLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMlp01 preset when built for graphql`, () => {
    const skuMlp01Preset = presets.graphqlPreset().build();
    expect(skuMlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 84,
        "restockableInDays": undefined,
        "sku": "MLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMlp01 preset when built for legacy rest`, () => {
    const skuMlp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 84,
        "restockableInDays": undefined,
        "sku": "MLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMlp01 preset when built for legacy graphql`, () => {
    const skuMlp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 84,
        "restockableInDays": undefined,
        "sku": "MLP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

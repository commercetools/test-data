import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-blp-01';

describe(`with skuBlp01 preset`, () => {
  it(`should return a skuBlp01 preset when built for rest`, () => {
    const skuBlp01Preset = presets.restPreset().build();
    expect(skuBlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlp01 preset when built for graphql`, () => {
    const skuBlp01Preset = presets.graphqlPreset().build();
    expect(skuBlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlp01 preset when built for legacy rest`, () => {
    const skuBlp01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBlp01 preset when built for legacy graphql`, () => {
    const skuBlp01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBlp01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 80,
        "restockableInDays": undefined,
        "sku": "BLP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

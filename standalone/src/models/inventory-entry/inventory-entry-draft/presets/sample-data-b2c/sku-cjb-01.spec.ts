import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cjb-01';

describe(`with skuCjb01 preset`, () => {
  it(`should return a skuCjb01 preset when built for rest`, () => {
    const skuCjb01Preset = presets.restPreset().build();
    expect(skuCjb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 96,
        "restockableInDays": undefined,
        "sku": "CJB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCjb01 preset when built for graphql`, () => {
    const skuCjb01Preset = presets.graphqlPreset().build();
    expect(skuCjb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 96,
        "restockableInDays": undefined,
        "sku": "CJB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCjb01 preset when built for legacy rest`, () => {
    const skuCjb01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCjb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 96,
        "restockableInDays": undefined,
        "sku": "CJB-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCjb01 preset when built for legacy graphql`, () => {
    const skuCjb01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCjb01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 96,
        "restockableInDays": undefined,
        "sku": "CJB-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

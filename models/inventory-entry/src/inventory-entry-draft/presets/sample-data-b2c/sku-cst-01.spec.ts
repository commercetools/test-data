import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cst-01';

describe(`with skuCst01 preset`, () => {
  it(`should return a skuCst01 preset when built for rest`, () => {
    const skuCst01Preset = presets.restPreset().build();
    expect(skuCst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCst01 preset when built for graphql`, () => {
    const skuCst01Preset = presets.graphqlPreset().build();
    expect(skuCst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCst01 preset when built for legacy rest`, () => {
    const skuCst01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCst01 preset when built for legacy graphql`, () => {
    const skuCst01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCst01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CST-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-barm-03';

describe(`with skuBarm03 preset`, () => {
  it(`should return a skuBarm03 preset when built for rest`, () => {
    const skuBarm03Preset = presets.restPreset().build();
    expect(skuBarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBarm03 preset when built for graphql`, () => {
    const skuBarm03Preset = presets.graphqlPreset().build();
    expect(skuBarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBarm03 preset when built for legacy rest`, () => {
    const skuBarm03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBarm03 preset when built for legacy graphql`, () => {
    const skuBarm03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BARM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});

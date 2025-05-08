import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tarm-03';

describe(`with skuTarm03 preset`, () => {
  it(`should return a skuTarm03 preset when built for rest`, () => {
    const skuTarm03Preset = presets.restPreset().build();
    expect(skuTarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm03 preset when built for graphql`, () => {
    const skuTarm03Preset = presets.graphqlPreset().build();
    expect(skuTarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm03 preset when built for legacy rest`, () => {
    const skuTarm03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTarm03 preset when built for legacy graphql`, () => {
    const skuTarm03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTarm03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TARM-03",
        "supplyChannel": undefined,
      }
    `);
  });
});

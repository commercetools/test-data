import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-spc-01';

describe(`with skuSpc01 preset`, () => {
  it(`should return a skuSpc01 preset when built for rest`, () => {
    const skuSpc01Preset = presets.restPreset().build();
    expect(skuSpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "SPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc01 preset when built for graphql`, () => {
    const skuSpc01Preset = presets.graphqlPreset().build();
    expect(skuSpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "SPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc01 preset when built for legacy rest`, () => {
    const skuSpc01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "SPC-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc01 preset when built for legacy graphql`, () => {
    const skuSpc01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpc01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "SPC-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

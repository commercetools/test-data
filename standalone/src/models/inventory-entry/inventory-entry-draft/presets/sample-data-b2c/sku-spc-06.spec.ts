import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-spc-06';

describe(`with skuSpc06 preset`, () => {
  it(`should return a skuSpc06 preset when built for rest`, () => {
    const skuSpc06Preset = presets.restPreset().build();
    expect(skuSpc06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc06 preset when built for graphql`, () => {
    const skuSpc06Preset = presets.graphqlPreset().build();
    expect(skuSpc06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc06 preset when built for legacy rest`, () => {
    const skuSpc06Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpc06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpc06 preset when built for legacy graphql`, () => {
    const skuSpc06Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpc06Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPC-06",
        "supplyChannel": undefined,
      }
    `);
  });
});

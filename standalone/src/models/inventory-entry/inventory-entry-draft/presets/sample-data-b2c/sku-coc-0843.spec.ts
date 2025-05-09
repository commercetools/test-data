import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-coc-0843';

describe(`with skuCoc0843 preset`, () => {
  it(`should return a skuCoc0843 preset when built for rest`, () => {
    const skuCoc0843Preset = presets.restPreset().build();
    expect(skuCoc0843Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoc0843 preset when built for graphql`, () => {
    const skuCoc0843Preset = presets.graphqlPreset().build();
    expect(skuCoc0843Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoc0843 preset when built for legacy rest`, () => {
    const skuCoc0843Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCoc0843Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCoc0843 preset when built for legacy graphql`, () => {
    const skuCoc0843Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCoc0843Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "COC-0843",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-carm-023';

describe(`with skuCarm023 preset`, () => {
  it(`should return a skuCarm023 preset when built for rest`, () => {
    const skuCarm023Preset = presets.restPreset().build();
    expect(skuCarm023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCarm023 preset when built for graphql`, () => {
    const skuCarm023Preset = presets.graphqlPreset().build();
    expect(skuCarm023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCarm023 preset when built for legacy rest`, () => {
    const skuCarm023Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCarm023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCarm023 preset when built for legacy graphql`, () => {
    const skuCarm023Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCarm023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CARM-023",
        "supplyChannel": undefined,
      }
    `);
  });
});

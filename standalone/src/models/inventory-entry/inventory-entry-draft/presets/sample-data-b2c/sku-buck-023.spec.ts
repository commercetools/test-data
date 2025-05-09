import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-buck-023';

describe(`with skuBuck023 preset`, () => {
  it(`should return a skuBuck023 preset when built for rest`, () => {
    const skuBuck023Preset = presets.restPreset().build();
    expect(skuBuck023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBuck023 preset when built for graphql`, () => {
    const skuBuck023Preset = presets.graphqlPreset().build();
    expect(skuBuck023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBuck023 preset when built for legacy rest`, () => {
    const skuBuck023Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBuck023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBuck023 preset when built for legacy graphql`, () => {
    const skuBuck023Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBuck023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "BUCK-023",
        "supplyChannel": undefined,
      }
    `);
  });
});

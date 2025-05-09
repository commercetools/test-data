import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cch-093';

describe(`with skuCch093 preset`, () => {
  it(`should return a skuCch093 preset when built for rest`, () => {
    const skuCch093Preset = presets.restPreset().build();
    expect(skuCch093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCch093 preset when built for graphql`, () => {
    const skuCch093Preset = presets.graphqlPreset().build();
    expect(skuCch093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCch093 preset when built for legacy rest`, () => {
    const skuCch093Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCch093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCch093 preset when built for legacy graphql`, () => {
    const skuCch093Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCch093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCH-093",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskw-093';

describe(`with skuCskw093 preset`, () => {
  it(`should return a skuCskw093 preset when built for rest`, () => {
    const skuCskw093Preset = presets.restPreset().build();
    expect(skuCskw093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw093 preset when built for graphql`, () => {
    const skuCskw093Preset = presets.graphqlPreset().build();
    expect(skuCskw093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw093 preset when built for legacy rest`, () => {
    const skuCskw093Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskw093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-093",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw093 preset when built for legacy graphql`, () => {
    const skuCskw093Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskw093Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-093",
        "supplyChannel": undefined,
      }
    `);
  });
});

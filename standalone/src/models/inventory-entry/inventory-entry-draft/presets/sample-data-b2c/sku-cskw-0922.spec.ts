import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskw-0922';

describe(`with skuCskw0922 preset`, () => {
  it(`should return a skuCskw0922 preset when built for rest`, () => {
    const skuCskw0922Preset = presets.restPreset().build();
    expect(skuCskw0922Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-0922",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw0922 preset when built for graphql`, () => {
    const skuCskw0922Preset = presets.graphqlPreset().build();
    expect(skuCskw0922Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-0922",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw0922 preset when built for legacy rest`, () => {
    const skuCskw0922Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskw0922Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-0922",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw0922 preset when built for legacy graphql`, () => {
    const skuCskw0922Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskw0922Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-0922",
        "supplyChannel": undefined,
      }
    `);
  });
});

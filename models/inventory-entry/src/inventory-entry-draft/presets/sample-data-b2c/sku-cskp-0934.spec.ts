import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskp-0934';

describe(`with skuCskp0934 preset`, () => {
  it(`should return a skuCskp0934 preset when built for rest`, () => {
    const skuCskp0934Preset = presets.restPreset().build();
    expect(skuCskp0934Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0934",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0934 preset when built for graphql`, () => {
    const skuCskp0934Preset = presets.graphqlPreset().build();
    expect(skuCskp0934Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0934",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0934 preset when built for legacy rest`, () => {
    const skuCskp0934Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskp0934Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0934",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0934 preset when built for legacy graphql`, () => {
    const skuCskp0934Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskp0934Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0934",
        "supplyChannel": undefined,
      }
    `);
  });
});

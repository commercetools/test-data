import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskp-0932';

describe(`with skuCskp0932 preset`, () => {
  it(`should return a skuCskp0932 preset when built for rest`, () => {
    const skuCskp0932Preset = presets.restPreset().build();
    expect(skuCskp0932Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0932",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0932 preset when built for graphql`, () => {
    const skuCskp0932Preset = presets.graphqlPreset().build();
    expect(skuCskp0932Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0932",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0932 preset when built for legacy rest`, () => {
    const skuCskp0932Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskp0932Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0932",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp0932 preset when built for legacy graphql`, () => {
    const skuCskp0932Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskp0932Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-0932",
        "supplyChannel": undefined,
      }
    `);
  });
});

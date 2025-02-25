import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskp-083';

describe(`with skuCskp083 preset`, () => {
  it(`should return a skuCskp083 preset when built for rest`, () => {
    const skuCskp0932Preset = presets.restPreset().build();
    expect(skuCskp0932Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-083",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp083 preset when built for graphql`, () => {
    const skuCskp083Preset = presets.graphqlPreset().build();
    expect(skuCskp083Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-083",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp083 preset when built for legacy rest`, () => {
    const skuCskp083Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskp083Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-083",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskp083 preset when built for legacy graphql`, () => {
    const skuCskp083Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskp083Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKP-083",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskw-9822';

describe(`with skuCskw9822 preset`, () => {
  it(`should return a skuCskw9822 preset when built for rest`, () => {
    const skuCskw9822Preset = presets.restPreset().build();
    expect(skuCskw9822Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-9822",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw9822 preset when built for graphql`, () => {
    const skuCskw9822Preset = presets.graphqlPreset().build();
    expect(skuCskw9822Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-9822",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw9822 preset when built for legacy rest`, () => {
    const skuCskw9822Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskw9822Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-9822",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskw9822 preset when built for legacy graphql`, () => {
    const skuCskw9822Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskw9822Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKW-9822",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cdg-09';

describe(`with skuCdg09 preset`, () => {
  it(`should return a skuCdg09 preset when built for rest`, () => {
    const skuCdg09Preset = presets.restPreset().build();
    expect(skuCdg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCdg09 preset when built for graphql`, () => {
    const skuCdg09Preset = presets.graphqlPreset().build();
    expect(skuCdg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCdg09 preset when built for legacy rest`, () => {
    const skuCdg09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCdg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCdg09 preset when built for legacy graphql`, () => {
    const skuCdg09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCdg09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CDG-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

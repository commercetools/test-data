import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-hdg-02';

describe(`with skuHdg02 preset`, () => {
  it(`should return a skuHdg02 preset when built for rest`, () => {
    const skuHdg02Preset = presets.restPreset().build();
    expect(skuHdg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHdg02 preset when built for graphql`, () => {
    const skuHdg02Preset = presets.graphqlPreset().build();
    expect(skuHdg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHdg02 preset when built for legacy rest`, () => {
    const skuHdg02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHdg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHdg02 preset when built for legacy graphql`, () => {
    const skuHdg02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHdg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "HDG-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

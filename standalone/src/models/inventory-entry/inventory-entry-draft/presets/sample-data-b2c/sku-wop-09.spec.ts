import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-wop-09';

describe(`with skuWop09 preset`, () => {
  it(`should return a skuWop09 preset when built for rest`, () => {
    const skuWop09Preset = presets.restPreset().build();
    expect(skuWop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWop09 preset when built for graphql`, () => {
    const skuWop09Preset = presets.graphqlPreset().build();
    expect(skuWop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWop09 preset when built for legacy rest`, () => {
    const skuWop09Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuWop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuWop09 preset when built for legacy graphql`, () => {
    const skuWop09Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuWop09Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "WOP-09",
        "supplyChannel": undefined,
      }
    `);
  });
});

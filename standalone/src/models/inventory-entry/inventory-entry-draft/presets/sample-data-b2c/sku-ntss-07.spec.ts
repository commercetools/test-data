import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-07';

describe(`with skuNtss07 preset`, () => {
  it(`should return a skuNtss07 preset when built for rest`, () => {
    const skuNtss07Preset = presets.restPreset().build();
    expect(skuNtss07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss07 preset when built for graphql`, () => {
    const skuNtss07Preset = presets.graphqlPreset().build();
    expect(skuNtss07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss07 preset when built for legacy rest`, () => {
    const skuNtss07Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss07 preset when built for legacy graphql`, () => {
    const skuNtss07Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss07Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-07",
        "supplyChannel": undefined,
      }
    `);
  });
});

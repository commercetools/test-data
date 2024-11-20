import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-03';

describe(`with skuNtss03 preset`, () => {
  it(`should return a skuNtss03 preset when built for rest`, () => {
    const skuNtss03Preset = presets.restPreset().build();
    expect(skuNtss03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss03 preset when built for graphql`, () => {
    const skuNtss03Preset = presets.graphqlPreset().build();
    expect(skuNtss03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss03 preset when built for legacy rest`, () => {
    const skuNtss03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss03 preset when built for legacy graphql`, () => {
    const skuNtss03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-03",
        "supplyChannel": undefined,
      }
    `);
  });
});

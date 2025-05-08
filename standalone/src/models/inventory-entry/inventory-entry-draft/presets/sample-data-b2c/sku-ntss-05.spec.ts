import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntss-05';

describe(`with skuNtss05 preset`, () => {
  it(`should return a skuNtss05 preset when built for rest`, () => {
    const skuNtss05Preset = presets.restPreset().build();
    expect(skuNtss05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss05 preset when built for graphql`, () => {
    const skuNtss05Preset = presets.graphqlPreset().build();
    expect(skuNtss05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss05 preset when built for legacy rest`, () => {
    const skuNtss05Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtss05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtss05 preset when built for legacy graphql`, () => {
    const skuNtss05Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtss05Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTSS-05",
        "supplyChannel": undefined,
      }
    `);
  });
});

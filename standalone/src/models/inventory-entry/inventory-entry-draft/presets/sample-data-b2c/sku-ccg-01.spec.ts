import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccg-01';

describe(`with skuCcg01 preset`, () => {
  it(`should return a skuCcg01 preset when built for rest`, () => {
    const skuCcg01Preset = presets.restPreset().build();
    expect(skuCcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg01 preset when built for graphql`, () => {
    const skuCcg01Preset = presets.graphqlPreset().build();
    expect(skuCcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg01 preset when built for legacy rest`, () => {
    const skuCcg01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg01 preset when built for legacy graphql`, () => {
    const skuCcg01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CCG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

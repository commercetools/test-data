import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ccg-02';

describe(`with skuCcg02 preset`, () => {
  it(`should return a skuCcg02 preset when built for rest`, () => {
    const skuCcg02Preset = presets.restPreset().build();
    expect(skuCcg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg02 preset when built for graphql`, () => {
    const skuCcg02Preset = presets.graphqlPreset().build();
    expect(skuCcg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg02 preset when built for legacy rest`, () => {
    const skuCcg02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCcg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCcg02 preset when built for legacy graphql`, () => {
    const skuCcg02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCcg02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CCG-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

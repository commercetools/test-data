import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cwg-01';

describe(`with skuCwg01 preset`, () => {
  it(`should return a skuCwg01 preset when built for rest`, () => {
    const skuCwg01Preset = presets.restPreset().build();
    expect(skuCwg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCwg01 preset when built for graphql`, () => {
    const skuCwg01Preset = presets.graphqlPreset().build();
    expect(skuCwg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCwg01 preset when built for legacy rest`, () => {
    const skuCwg01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCwg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCwg01 preset when built for legacy graphql`, () => {
    const skuCwg01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCwg01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 99,
        "restockableInDays": undefined,
        "sku": "CWG-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

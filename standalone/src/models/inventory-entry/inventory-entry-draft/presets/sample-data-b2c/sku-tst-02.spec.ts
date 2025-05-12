import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tst-02';

describe(`with skuTst02 preset`, () => {
  it(`should return a skuTst02 preset when built for rest`, () => {
    const skuTst02Preset = presets.restPreset().build();
    expect(skuTst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTst02 preset when built for graphql`, () => {
    const skuTst02Preset = presets.graphqlPreset().build();
    expect(skuTst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTst02 preset when built for legacy rest`, () => {
    const skuTst02Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTst02 preset when built for legacy graphql`, () => {
    const skuTst02Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTst02Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "TST-02",
        "supplyChannel": undefined,
      }
    `);
  });
});

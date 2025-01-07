import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-flas-094';

describe(`with skuFlas094 preset`, () => {
  it(`should return a skuFlas094 preset when built for rest`, () => {
    const skuFlas094Preset = presets.restPreset().build();
    expect(skuFlas094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFlas094 preset when built for graphql`, () => {
    const skuFlas094Preset = presets.graphqlPreset().build();
    expect(skuFlas094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFlas094 preset when built for legacy rest`, () => {
    const skuFlas094Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFlas094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFlas094 preset when built for legacy graphql`, () => {
    const skuFlas094Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFlas094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "FLAS-094",
        "supplyChannel": undefined,
      }
    `);
  });
});

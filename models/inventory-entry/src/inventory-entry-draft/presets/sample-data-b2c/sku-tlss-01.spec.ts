import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-tlss-01';

describe(`with skuTlss01 preset`, () => {
  it(`should return a skuTlss01 preset when built for rest`, () => {
    const skuTlss01Preset = presets.restPreset().build();
    expect(skuTlss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "TLSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTlss01 preset when built for graphql`, () => {
    const skuTlss01Preset = presets.graphqlPreset().build();
    expect(skuTlss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "TLSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTlss01 preset when built for legacy rest`, () => {
    const skuTlss01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTlss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "TLSS-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuTlss01 preset when built for legacy graphql`, () => {
    const skuTlss01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTlss01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "TLSS-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

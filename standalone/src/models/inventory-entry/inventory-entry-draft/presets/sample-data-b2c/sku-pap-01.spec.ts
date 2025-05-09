import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-pap-01';

describe(`with skuPap01 preset`, () => {
  it(`should return a skuPap01 preset when built for rest`, () => {
    const skuPap01Preset = presets.restPreset().build();
    expect(skuPap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPap01 preset when built for graphql`, () => {
    const skuPap01Preset = presets.graphqlPreset().build();
    expect(skuPap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPap01 preset when built for legacy rest`, () => {
    const skuPap01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuPap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPap01 preset when built for legacy graphql`, () => {
    const skuPap01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuPap01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 95,
        "restockableInDays": undefined,
        "sku": "PAP-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

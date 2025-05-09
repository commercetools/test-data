import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-ntts-04';

describe(`with skuNtts04 preset`, () => {
  it(`should return a skuNtts04 preset when built for rest`, () => {
    const skuNtts04Preset = presets.restPreset().build();
    expect(skuNtts04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtts04 preset when built for graphql`, () => {
    const skuNtts04Preset = presets.graphqlPreset().build();
    expect(skuNtts04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtts04 preset when built for legacy rest`, () => {
    const skuNtts04Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuNtts04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNtts04 preset when built for legacy graphql`, () => {
    const skuNtts04Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuNtts04Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "NTTS-04",
        "supplyChannel": undefined,
      }
    `);
  });
});

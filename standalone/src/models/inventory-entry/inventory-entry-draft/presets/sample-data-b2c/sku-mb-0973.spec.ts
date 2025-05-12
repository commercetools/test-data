import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-mb-0973';

describe(`with skuMb0973 preset`, () => {
  it(`should return a skuMb0973 preset when built for rest`, () => {
    const skuMb0973Preset = presets.restPreset().build();
    expect(skuMb0973Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MB-0973",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMb0973 preset when built for graphql`, () => {
    const skuMb0973Preset = presets.graphqlPreset().build();
    expect(skuMb0973Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MB-0973",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMb0973 preset when built for legacy rest`, () => {
    const skuMb0973Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMb0973Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MB-0973",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMb0973 preset when built for legacy graphql`, () => {
    const skuMb0973Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMb0973Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "MB-0973",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-aar-34';

describe(`with skuAar34 preset`, () => {
  it(`should return a skuAar34 preset when built for rest`, () => {
    const skuAar34Preset = presets.restPreset().build();
    expect(skuAar34Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAar34 preset when built for graphql`, () => {
    const skuAar34Preset = presets.graphqlPreset().build();
    expect(skuAar34Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAar34 preset when built for legacy rest`, () => {
    const skuAar34Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAar34Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAar34 preset when built for legacy graphql`, () => {
    const skuAar34Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAar34Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "AAR-34",
        "supplyChannel": undefined,
      }
    `);
  });
});

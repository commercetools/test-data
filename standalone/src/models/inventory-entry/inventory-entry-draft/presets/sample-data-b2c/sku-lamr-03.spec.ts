import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-lamr-03';

describe(`with skuLamr03 preset`, () => {
  it(`should return a skuLamr03 preset when built for rest`, () => {
    const skuLamr03Preset = presets.restPreset().build();
    expect(skuLamr03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLamr03 preset when built for graphql`, () => {
    const skuLamr03Preset = presets.graphqlPreset().build();
    expect(skuLamr03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLamr03 preset when built for legacy rest`, () => {
    const skuLamr03Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLamr03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLamr03 preset when built for legacy graphql`, () => {
    const skuLamr03Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLamr03Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "LAMR-03",
        "supplyChannel": undefined,
      }
    `);
  });
});

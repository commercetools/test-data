import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-rcd-01';

describe(`with skuRcd01 preset`, () => {
  it(`should return a skuRcd01 preset when built for rest`, () => {
    const skuRcd01Preset = presets.restPreset().build();
    expect(skuRcd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcd01 preset when built for graphql`, () => {
    const skuRcd01Preset = presets.graphqlPreset().build();
    expect(skuRcd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcd01 preset when built for legacy rest`, () => {
    const skuRcd01Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuRcd01 preset when built for legacy graphql`, () => {
    const skuRcd01Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcd01Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 98,
        "restockableInDays": undefined,
        "sku": "RCD-01",
        "supplyChannel": undefined,
      }
    `);
  });
});

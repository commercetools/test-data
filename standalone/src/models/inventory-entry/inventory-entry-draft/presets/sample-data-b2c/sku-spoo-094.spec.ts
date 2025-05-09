import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-spoo-094';

describe(`with skuSpoo094 preset`, () => {
  it(`should return a skuSpoo094 preset when built for rest`, () => {
    const skuSpoo094Preset = presets.restPreset().build();
    expect(skuSpoo094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpoo094 preset when built for graphql`, () => {
    const skuSpoo094Preset = presets.graphqlPreset().build();
    expect(skuSpoo094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpoo094 preset when built for legacy rest`, () => {
    const skuSpoo094Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuSpoo094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuSpoo094 preset when built for legacy graphql`, () => {
    const skuSpoo094Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuSpoo094Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "SPOO-094",
        "supplyChannel": undefined,
      }
    `);
  });
});

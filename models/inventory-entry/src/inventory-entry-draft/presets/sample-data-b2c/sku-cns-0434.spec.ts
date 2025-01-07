import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cns-0434';

describe(`with skuCns0434 preset`, () => {
  it(`should return a skuCns0434 preset when built for rest`, () => {
    const skuCns0434Preset = presets.restPreset().build();
    expect(skuCns0434Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CNS-0434",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCns0434 preset when built for graphql`, () => {
    const skuCns0434Preset = presets.graphqlPreset().build();
    expect(skuCns0434Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CNS-0434",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCns0434 preset when built for legacy rest`, () => {
    const skuCns0434Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCns0434Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CNS-0434",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCns0434 preset when built for legacy graphql`, () => {
    const skuCns0434Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCns0434Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CNS-0434",
        "supplyChannel": undefined,
      }
    `);
  });
});

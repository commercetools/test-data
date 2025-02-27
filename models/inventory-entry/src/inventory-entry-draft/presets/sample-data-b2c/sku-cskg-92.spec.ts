import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskg-92';

describe(`with skuCskg92 preset`, () => {
  it(`should return a skuCskg92 preset when built for rest`, () => {
    const skuCskg92Preset = presets.restPreset().build();
    expect(skuCskg92Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-92",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg92 preset when built for graphql`, () => {
    const skuCskg92Preset = presets.graphqlPreset().build();
    expect(skuCskg92Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-92",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg92 preset when built for legacy rest`, () => {
    const skuCskg92Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskg92Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-92",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg92 preset when built for legacy graphql`, () => {
    const skuCskg92Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskg92Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-92",
        "supplyChannel": undefined,
      }
    `);
  });
});

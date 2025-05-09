import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskg-2345';

describe(`with skuCskg2345 preset`, () => {
  it(`should return a skuCskg2345 preset when built for rest`, () => {
    const skuCskg2345Preset = presets.restPreset().build();
    expect(skuCskg2345Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-2345",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg2345 preset when built for graphql`, () => {
    const skuCskg2345Preset = presets.graphqlPreset().build();
    expect(skuCskg2345Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-2345",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg2345 preset when built for legacy rest`, () => {
    const skuCskg2345Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskg2345Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-2345",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg2345 preset when built for legacy graphql`, () => {
    const skuCskg2345Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskg2345Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-2345",
        "supplyChannel": undefined,
      }
    `);
  });
});

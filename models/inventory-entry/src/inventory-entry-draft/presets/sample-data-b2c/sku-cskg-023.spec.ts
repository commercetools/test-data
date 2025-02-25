import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import * as presets from './sku-cskg-023';

describe(`with skuCskg023 preset`, () => {
  it(`should return a skuCskg023 preset when built for rest`, () => {
    const skuCskg023Preset = presets.restPreset().build();
    expect(skuCskg023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg023 preset when built for graphql`, () => {
    const skuCskg023Preset = presets.graphqlPreset().build();
    expect(skuCskg023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg023 preset when built for legacy rest`, () => {
    const skuCskg023Preset = presets
      .compatPreset()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCskg023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCskg023 preset when built for legacy graphql`, () => {
    const skuCskg023Preset = presets
      .compatPreset()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCskg023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 100,
        "restockableInDays": undefined,
        "sku": "CSKG-023",
        "supplyChannel": undefined,
      }
    `);
  });
});

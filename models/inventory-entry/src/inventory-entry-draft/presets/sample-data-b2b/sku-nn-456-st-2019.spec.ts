import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2019 from './sku-nn-456-st-2019';

describe(`with skuNn456St2019 preset`, () => {
  it(`should return a skuNn456St2019 preset`, () => {
    const skuNn456St2019Preset = skuNn456St2019().build<TInventoryEntryDraft>();
    expect(skuNn456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2019 preset when built for graphql`, () => {
    const skuNn456St2019PresetGraphql =
      skuNn456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});

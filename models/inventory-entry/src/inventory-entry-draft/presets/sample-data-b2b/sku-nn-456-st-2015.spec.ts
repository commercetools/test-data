import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2015 from './sku-nn-456-st-2015';

describe(`with skuNn456St2015 preset`, () => {
  it(`should return a skuNn456St2015 preset`, () => {
    const skuNn456St2015Preset = skuNn456St2015().build<TInventoryEntryDraft>();
    expect(skuNn456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2015 preset when built for graphql`, () => {
    const skuNn456St2015PresetGraphql =
      skuNn456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});

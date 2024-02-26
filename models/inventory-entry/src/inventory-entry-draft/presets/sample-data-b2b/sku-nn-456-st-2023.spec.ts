import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2023 from './sku-nn-456-st-2023';

describe(`with skuNn456St2023 preset`, () => {
  it(`should return a skuNn456St2023 preset`, () => {
    const skuNn456St2023Preset = skuNn456St2023().build<TInventoryEntryDraft>();
    expect(skuNn456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2023 preset when built for graphql`, () => {
    const skuNn456St2023PresetGraphql =
      skuNn456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

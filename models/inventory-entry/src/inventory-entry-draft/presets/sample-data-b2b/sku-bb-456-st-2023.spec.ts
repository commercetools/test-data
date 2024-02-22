import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2023 from './sku-bb-456-st-2023';

describe(`with skuBb456St2023 preset`, () => {
  it(`should return a skuBb456St2023 preset`, () => {
    const skuBb456St2023Preset = skuBb456St2023().build<TInventoryEntryDraft>();
    expect(skuBb456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2023 preset when built for graphql`, () => {
    const skuBb456St2023PresetGraphql =
      skuBb456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

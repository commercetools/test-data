import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2023 from './sku-v-456-st-2023';

describe(`with skuV456St2023 preset`, () => {
  it(`should return a skuV456St2023 preset`, () => {
    const skuV456St2023Preset = skuV456St2023().build<TInventoryEntryDraft>();
    expect(skuV456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2023 preset when built for graphql`, () => {
    const skuV456St2023PresetGraphql =
      skuV456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

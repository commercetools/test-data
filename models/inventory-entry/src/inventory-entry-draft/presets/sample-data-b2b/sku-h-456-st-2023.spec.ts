import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2023 from './sku-h-456-st-2023';

describe(`with skuH456St2023 preset`, () => {
  it(`should return a skuH456St2023 preset`, () => {
    const skuH456St2023Preset = skuH456St2023().build<TInventoryEntryDraft>();
    expect(skuH456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2023 preset when built for graphql`, () => {
    const skuH456St2023PresetGraphql =
      skuH456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2023 from './sku-b-456-st-2023';

describe(`with skuB456St2023 preset`, () => {
  it(`should return a skuB456St2023 preset`, () => {
    const skuB456St2023Preset = skuB456St2023().build<TInventoryEntryDraft>();
    expect(skuB456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2023 preset when built for graphql`, () => {
    const skuB456St2023PresetGraphql =
      skuB456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2019 from './sku-b-456-st-2019';

describe(`with skuB456St2019 preset`, () => {
  it(`should return a skuB456St2019 preset`, () => {
    const skuB456St2019Preset = skuB456St2019().build<TInventoryEntryDraft>();
    expect(skuB456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2019 preset when built for graphql`, () => {
    const skuB456St2019PresetGraphql =
      skuB456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});

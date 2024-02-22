import type { TInventoryEntryDraft } from '../../../types';
import skuB456St2015 from './sku-b-456-st-2015';

describe(`with skuB456St2015 preset`, () => {
  it(`should return a skuB456St2015 preset`, () => {
    const skuB456St2015Preset = skuB456St2015().build<TInventoryEntryDraft>();
    expect(skuB456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuB456St2015 preset when built for graphql`, () => {
    const skuB456St2015PresetGraphql =
      skuB456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuB456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "b456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});

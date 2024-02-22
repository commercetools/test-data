import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2015 from './sku-v-456-st-2015';

describe(`with skuV456St2015 preset`, () => {
  it(`should return a skuV456St2015 preset`, () => {
    const skuV456St2015Preset = skuV456St2015().build<TInventoryEntryDraft>();
    expect(skuV456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2015 preset when built for graphql`, () => {
    const skuV456St2015PresetGraphql =
      skuV456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});

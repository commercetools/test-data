import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2019 from './sku-v-456-st-2019';

describe(`with skuV456St2019 preset`, () => {
  it(`should return a skuV456St2019 preset`, () => {
    const skuV456St2019Preset = skuV456St2019().build<TInventoryEntryDraft>();
    expect(skuV456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2019 preset when built for graphql`, () => {
    const skuV456St2019PresetGraphql =
      skuV456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});

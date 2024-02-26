import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2019 from './sku-h-456-st-2019';

describe(`with skuH456St2019 preset`, () => {
  it(`should return a skuH456St2019 preset`, () => {
    const skuH456St2019Preset = skuH456St2019().build<TInventoryEntryDraft>();
    expect(skuH456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2019 preset when built for graphql`, () => {
    const skuH456St2019PresetGraphql =
      skuH456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});

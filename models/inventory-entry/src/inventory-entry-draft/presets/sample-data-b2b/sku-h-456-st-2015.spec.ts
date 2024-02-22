import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2015 from './sku-h-456-st-2015';

describe(`with skuH456St2015 preset`, () => {
  it(`should return a skuH456St2015 preset`, () => {
    const skuH456St2015Preset = skuH456St2015().build<TInventoryEntryDraft>();
    expect(skuH456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2015 preset when built for graphql`, () => {
    const skuH456St2015PresetGraphql =
      skuH456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});

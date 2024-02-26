import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2015 from './sku-hh-456-st-2015';

describe(`with skuHh456St2015 preset`, () => {
  it(`should return a skuHh456St2015 preset`, () => {
    const skuHh456St2015Preset = skuHh456St2015().build<TInventoryEntryDraft>();
    expect(skuHh456St2015Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2015 preset when built for graphql`, () => {
    const skuHh456St2015PresetGraphql =
      skuHh456St2015().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2015PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});

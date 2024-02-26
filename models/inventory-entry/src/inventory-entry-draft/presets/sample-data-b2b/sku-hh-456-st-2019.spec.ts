import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2019 from './sku-hh-456-st-2019';

describe(`with skuHh456St2019 preset`, () => {
  it(`should return a skuHh456St2019 preset`, () => {
    const skuHh456St2019Preset = skuHh456St2019().build<TInventoryEntryDraft>();
    expect(skuHh456St2019Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2019 preset when built for graphql`, () => {
    const skuHh456St2019PresetGraphql =
      skuHh456St2019().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2019PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});

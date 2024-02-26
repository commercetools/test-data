import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2023 from './sku-hh-456-st-2023';

describe(`with skuHh456St2023 preset`, () => {
  it(`should return a skuHh456St2023 preset`, () => {
    const skuHh456St2023Preset = skuHh456St2023().build<TInventoryEntryDraft>();
    expect(skuHh456St2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2023 preset when built for graphql`, () => {
    const skuHh456St2023PresetGraphql =
      skuHh456St2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

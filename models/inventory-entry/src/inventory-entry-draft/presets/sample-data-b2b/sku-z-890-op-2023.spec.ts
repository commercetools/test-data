import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2023 from './sku-z-890-op-2023';

describe(`with skuZ890Op2023 preset`, () => {
  it(`should return a skuZ890Op2023 preset`, () => {
    const skuZ890Op2023Preset = skuZ890Op2023().build<TInventoryEntryDraft>();
    expect(skuZ890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2023 preset when built for graphql`, () => {
    const skuZ890Op2023PresetGraphql =
      skuZ890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

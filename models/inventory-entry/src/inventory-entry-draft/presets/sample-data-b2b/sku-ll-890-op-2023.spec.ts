import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2023 from './sku-ll-890-op-2023';

describe(`with skuLl890Op2023 preset`, () => {
  it(`should return a skuLl890Op2023 preset`, () => {
    const skuLl890Op2023Preset = skuLl890Op2023().build<TInventoryEntryDraft>();
    expect(skuLl890Op2023Preset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2023 preset when built for graphql`, () => {
    const skuLl890Op2023PresetGraphql =
      skuLl890Op2023().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2023PresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});

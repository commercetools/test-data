import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpRed from './sku-xx-890-op-red';

describe(`with skuXx890OpRed preset`, () => {
  it(`should return a skuXx890OpRed preset`, () => {
    const skuXx890OpRedPreset = skuXx890OpRed().build<TInventoryEntryDraft>();
    expect(skuXx890OpRedPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpRed preset when built for graphql`, () => {
    const skuXx890OpRedPresetGraphql =
      skuXx890OpRed().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpRedPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-red",
        "supplyChannel": undefined,
      }
    `);
  });
});

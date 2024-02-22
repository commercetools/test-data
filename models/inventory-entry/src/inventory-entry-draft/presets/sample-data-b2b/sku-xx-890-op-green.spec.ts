import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpGreen from './sku-xx-890-op-green';

describe(`with skuXx890OpGreen preset`, () => {
  it(`should return a skuXx890OpGreen preset`, () => {
    const skuXx890OpGreenPreset =
      skuXx890OpGreen().build<TInventoryEntryDraft>();
    expect(skuXx890OpGreenPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpGreen preset when built for graphql`, () => {
    const skuXx890OpGreenPresetGraphql =
      skuXx890OpGreen().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpGreenPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-green",
        "supplyChannel": undefined,
      }
    `);
  });
});

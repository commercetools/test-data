import type { TInventoryEntryDraft } from '../../../types';
import skuXx890OpBlue from './sku-xx-890-op-blue';

describe(`with skuXx890OpBlue preset`, () => {
  it(`should return a skuXx890OpBlue preset`, () => {
    const skuXx890OpBluePreset = skuXx890OpBlue().build<TInventoryEntryDraft>();
    expect(skuXx890OpBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuXx890OpBlue preset when built for graphql`, () => {
    const skuXx890OpBluePresetGraphql =
      skuXx890OpBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuXx890OpBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "xx890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});

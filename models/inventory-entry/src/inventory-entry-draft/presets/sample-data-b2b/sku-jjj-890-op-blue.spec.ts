import type { TInventoryEntryDraft } from '../../../types';
import skuJjj890OpBlue from './sku-jjj-890-op-blue';

describe(`with skuJjj890OpBlue preset`, () => {
  it(`should return a skuJjj890OpBlue preset`, () => {
    const skuJjj890OpBluePreset =
      skuJjj890OpBlue().build<TInventoryEntryDraft>();
    expect(skuJjj890OpBluePreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJjj890OpBlue preset when built for graphql`, () => {
    const skuJjj890OpBluePresetGraphql =
      skuJjj890OpBlue().buildGraphql<TInventoryEntryDraft>();
    expect(skuJjj890OpBluePresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jjj890-op-blue",
        "supplyChannel": undefined,
      }
    `);
  });
});
